import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';

type CatImage = {
	x: number;
	y: number;
	speedX: number;
	speedY: number;
	element?: HTMLImageElement;
};

class Cat extends LitElement {
	static styles = css`
		:host {
			position: fixed;
			inset: 0;
			z-index: 9999;
			pointer-events: none;
			overflow: hidden;
		}

		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 400px;
			aspect-ratio: 1/1;
			object-fit: contain;
			will-change: transform;
			pointer-events: none;
			user-select: none;
		}

		@media screen and (max-width: 700px) {
			img {
				width: 200px;
			}
		}
	`;

	@property({ type: String }) catOne = '';

	@property({ type: String }) catTwo = '';

	#animationFrame?: number;
	#lastFrameTime = 0;

	#cats: CatImage[] = [
		{
			x: 0,
			y: 0,
			speedX: 220,
			speedY: 170,
		},
		{
			x: 0,
			y: 0,
			speedX: 190,
			speedY: 240,
		},
	];

	connectedCallback() {
		super.connectedCallback();

		document.addEventListener('click', this.#handleDocumentClick);
	}

	firstUpdated() {
		const images = this.shadowRoot?.querySelectorAll<HTMLImageElement>('img');

		if (!images) {
			return;
		}

		this.#cats[0].element = images[0];
		this.#cats[1].element = images[1];

		for (const cat of this.#cats) {
			this.#randomizePosition(cat);
		}

		this.#lastFrameTime = performance.now();
		this.#animationFrame = requestAnimationFrame(this.#animate);
	}

	disconnectedCallback() {
		super.disconnectedCallback();

		document.removeEventListener('click', this.#handleDocumentClick);

		if (this.#animationFrame) {
			cancelAnimationFrame(this.#animationFrame);
		}
	}

	#handleDocumentClick = () => {
		this.dispatchEvent(
			new CustomEvent('close', {
				bubbles: true,
				composed: true,
			}),
		);
	};

	#animate = (time: number) => {
		const deltaTime = Math.min((time - this.#lastFrameTime) / 1000, 0.05);

		this.#lastFrameTime = time;

		for (const cat of this.#cats) {
			const element = cat.element;

			if (!element) {
				continue;
			}

			const width = element.offsetWidth;
			const height = element.offsetHeight;

			cat.x += cat.speedX * deltaTime;
			cat.y += cat.speedY * deltaTime;

			if (cat.x <= 0) {
				cat.x = 0;
				cat.speedX = Math.abs(cat.speedX);
			}

			if (cat.x + width >= window.innerWidth) {
				cat.x = window.innerWidth - width;
				cat.speedX = -Math.abs(cat.speedX);
			}

			if (cat.y <= 0) {
				cat.y = 0;
				cat.speedY = Math.abs(cat.speedY);
			}

			if (cat.y + height >= window.innerHeight) {
				cat.y = window.innerHeight - height;
				cat.speedY = -Math.abs(cat.speedY);
			}

			element.style.transform = `translate3d(${cat.x}px, ${cat.y}px, 0)`;
		}

		this.#animationFrame = requestAnimationFrame(this.#animate);
	};

	#randomizePosition(cat: CatImage) {
		if (!cat.element) {
			return;
		}

		const maxX = window.innerWidth - cat.element.offsetWidth;
		const maxY = window.innerHeight - cat.element.offsetHeight;

		cat.x = Math.random() * maxX;
		cat.y = Math.random() * maxY;

		cat.speedX *= Math.random() < 0.5 ? -1 : 1;
		cat.speedY *= Math.random() < 0.5 ? -1 : 1;
	}

	render() {
		return html`
			<img src=${this.catOne} alt="" />
			<img src=${this.catTwo} alt="" />
		`;
	}
}

customElements.define('dm-cat', Cat);
