import { LitElement, css, html } from 'lit';

class Beyblade extends LitElement {
	static styles = css`
    :host {
      --image-size: 300px;
      --animation-time: 0.3s;
    }

		.container {
			cursor: pointer;
			user-select: none;
			touch-action: none;
			-webkit-user-select: none;
			-webkit-touch-callout: none;
			-webkit-tap-highlight-color: transparent;
			transform: scale(1) rotate(0deg);
			transition: transform var(--animation-time) ease;
		}

		img {
      width: var(--image-size);
      aspect-ratio: 1 / 1;
      object-fit: contain;
      will-change: transform;
			pointer-events: none;
			user-select: none;
			-webkit-user-select: none;
			-webkit-touch-callout: none;
			-webkit-user-drag: none;
    }

		@media (hover: hover) {
			.container:hover {
				transform: scale(1.2) rotate(-5deg);
			}
		}
  `;

	#rotation = 0;
	#speed = 0;

	#hovered = false;
	#cycleStart = 0;
	#animationFrame?: number;
	#lastFrameTime = 0;

	readonly #maxSpeed = 1800;
	readonly #accelerationDuration = 1000;
	readonly #fullSpeedDuration = 1000;
	readonly #decelerationDuration = 1000;
	readonly #leaveDeceleration = 1800;

	#start() {
		if (this.#hovered) {
			return;
		}

		this.#hovered = true;
		this.#cycleStart = performance.now();

		if (!this.#animationFrame) {
			this.#lastFrameTime = performance.now();
			this.#animationFrame = requestAnimationFrame(this.#animate);
		}
	}

	#stop() {
		this.#hovered = false;

		if (!this.#animationFrame && this.#speed > 0) {
			this.#lastFrameTime = performance.now();
			this.#animationFrame = requestAnimationFrame(this.#animate);
		}
	}

	#handlePointerEnter(event: PointerEvent) {
		if (event.pointerType === 'mouse') {
			this.#start();
		}
	}

	#handlePointerLeave(event: PointerEvent) {
		if (event.pointerType === 'mouse') {
			this.#stop();
		}
	}

	#handlePointerDown(event: PointerEvent) {
		if (event.pointerType !== 'mouse') {
			this.#start();
		}
	}

	#handlePointerUp(event: PointerEvent) {
		if (event.pointerType !== 'mouse') {
			this.#stop();
		}
	}

	#animate = (time: number) => {
		const image = this.shadowRoot?.querySelector<HTMLImageElement>('img');

		if (!image) {
			this.#animationFrame = undefined;
			return;
		}

		const deltaTime = (time - this.#lastFrameTime) / 1000;
		this.#lastFrameTime = time;

		if (this.#hovered) {
			this.#updateHoveredSpeed(time);
		} else {
			this.#updateLeavingSpeed(deltaTime);
		}

		this.#rotation += this.#speed * deltaTime;

		image.style.transform = `rotate(${this.#rotation}deg)`;

		if (this.#hovered || this.#speed > 0.1) {
			this.#animationFrame = requestAnimationFrame(this.#animate);
		} else {
			this.#speed = 0;
			this.#animationFrame = undefined;
		}
	};

	#updateHoveredSpeed(time: number) {
		const cycleDuration =
			this.#accelerationDuration + this.#fullSpeedDuration + this.#decelerationDuration;

		let elapsed = time - this.#cycleStart;

		if (elapsed >= cycleDuration) {
			this.#cycleStart = time;
			elapsed = 0;
		}

		if (elapsed < this.#accelerationDuration) {
			const progress = elapsed / this.#accelerationDuration;

			this.#speed = this.#easeIn(progress) * this.#maxSpeed;
			return;
		}

		if (elapsed < this.#accelerationDuration + this.#fullSpeedDuration) {
			this.#speed = this.#maxSpeed;
			return;
		}

		const decelerationElapsed = elapsed - this.#accelerationDuration - this.#fullSpeedDuration;

		const progress = decelerationElapsed / this.#decelerationDuration;

		this.#speed = (1 - this.#easeOut(progress)) * this.#maxSpeed;
	}

	#updateLeavingSpeed(deltaTime: number) {
		this.#speed = Math.max(0, this.#speed - this.#leaveDeceleration * deltaTime);
	}

	#easeIn(value: number) {
		return value * value;
	}

	#easeOut(value: number) {
		return 1 - (1 - value) * (1 - value);
	}

	disconnectedCallback() {
		super.disconnectedCallback();

		if (this.#animationFrame) {
			cancelAnimationFrame(this.#animationFrame);
		}
	}

	render() {
		return html`
      <div
        class="container"
				@pointerenter=${this.#handlePointerEnter}
				@pointerleave=${this.#handlePointerLeave}
				@pointerdown=${this.#handlePointerDown}
				@pointerup=${this.#handlePointerUp}
				@pointercancel=${this.#handlePointerUp}
      >
				<img
					src="./assets/img/foolsparadise_logo.png"
					alt="foolsparadise GmbH Logo"
					draggable="false"
				/>
      </div>
    `;
	}
}

customElements.define('dm-beyblade', Beyblade);
