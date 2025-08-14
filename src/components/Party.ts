import { LitElement, css, html } from 'lit';

class Party extends LitElement {
	static styles = css`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: black;
      color: white;
      overflow: hidden;
      z-index: -1;
    }

    .beam {
      width: 5px;
      height: 2000px;
      position: absolute;
      background: red;
      box-shadow: 0px 0px 40px 10px red;
      display: none;
    }

    .center {
      position: absolute;
      left: 50%;
      top: 120px;
      height: 20px;
      aspect-ratio: 1 / 1;
      background-color: white;
      border-radius: 50%;
      z-index: 100;
      transform: translate(-50%, -50%);
    }

    .bottom-light {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      position: fixed;
      background-color: #fff;
    }

    #switch {
      color: white;
      background: black;
      font-size: 32px;
      font-weight: bold;
      padding: 8px 15px;
      border: none;
      border-radius: 5px;
      display: block;
      margin: 70px auto 0;
      cursor: pointer;
      outline: none;
    }

    #disco-ball {
      max-width: 60px;
      position: absolute;
      display: none;
      user-select: none;
    }
  `;

	beams: HTMLDivElement[] = [];
	lights: HTMLDivElement[] = [];
	dancerSwitch = true;
	mouseX = 0;
	mouseY = 0;

	colors = ['#ff7979', '#686de0', '#badc58', '#f6e58d', '#ffbe76', '#e056fd', '#7ed6df', '#dff9fb'];

	updateAnimation = () => {
		const time = Date.now() / 2750;
		const xLoc = window.innerWidth / 2;
		this.beams.forEach((beam, z) => {
			beam.style.left = `${xLoc}px`;
			beam.style.top = '120px';
			beam.style.display = 'block';
			beam.style.transformOrigin = 'top center';
			beam.style.background = 'linear-gradient(to top, transparent, white)';
			beam.style.boxShadow = `0px 0px 30px 10px ${this.colors[z]}, 0px 0px 150px 10px ${this.colors[z]}`;
			beam.style.transform = `rotate(${(time % 360) * 180 + z * 45}deg)`;
		});
		requestAnimationFrame(this.updateAnimation);
	};

	shuffleArray = (array: string[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	};

	getLightStyle(x: number, y: number, color: string) {
		return `
      left: ${x}px; top: ${y}px;
      box-shadow:
        0px 0px 10px 10px white,
        0px 0px 30px 30px ${color},
        0px 100px 100px 30px ${color};
    `;
	}

	remakeLights = () => {
		for (const light of this.lights) {
			light.remove();
		}
		this.lights = [];
		this.createLights();
	};

	createLights() {
		const width = window.innerWidth;
		const height = window.innerHeight;

		for (let x = 0; x < width; x += 150) {
			const randomColor = this.colors[Math.floor(this.colors.length * Math.random())];
			const lightTop = document.createElement('div');
			lightTop.classList.add('bottom-light');
			lightTop.style.cssText = this.getLightStyle(x, 0, randomColor);

			const lightBottom = document.createElement('div');
			lightBottom.classList.add('bottom-light');
			lightBottom.style.cssText = this.getLightStyle(x, height - 10, randomColor);

			this.lights.push(lightTop, lightBottom);
			this.shadowRoot?.append(lightTop, lightBottom);
		}

		for (let y = 0; y < height; y += 150) {
			const randomColor = this.colors[Math.floor(this.colors.length * Math.random())];
			const lightLeft = document.createElement('div');
			lightLeft.classList.add('bottom-light');
			lightLeft.style.cssText = this.getLightStyle(0, y, randomColor);

			const lightRight = document.createElement('div');
			lightRight.classList.add('bottom-light');
			lightRight.style.cssText = this.getLightStyle(width - 10, y, randomColor);

			this.lights.push(lightLeft, lightRight);
			this.shadowRoot?.append(lightLeft, lightRight);
		}
	}

	startParty = () => {
		this.createLights();
		this.updateAnimation();

		window.addEventListener('mousemove', e => {
			this.mouseX = e.clientX;
			this.mouseY = e.clientY;
			const dancer = this.shadowRoot?.getElementById('disco-ball') as HTMLImageElement;
			let transform = '';
			if (this.dancerSwitch) {
				transform = 'transform: scaleX(-1);';
			}
			dancer.style.cssText = `left: ${this.mouseX}px; top: ${this.mouseY}px; display: block; ${transform}`;
		});

		window.addEventListener('resize', this.remakeLights);
	};

	firstUpdated() {
		this.beams = Array.from(
			{ length: 8 },
			(_, i) => this.shadowRoot?.getElementById(`beam${i}`) as HTMLDivElement,
		);
		setInterval(() => this.shuffleArray(this.colors), 1000);
		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		setInterval(() => (this.dancerSwitch = !this.dancerSwitch), 200);
		this.startParty();
	}

	render() {
		return html`
      <div id="container">
        <div class="center"></div>
        ${Array.from({ length: 8 }, (_, i) => html`<div id="beam${i}" class="beam"></div>`)}
        <img id="disco-ball" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/94930/dancer.png" />
      </div>
    `;
	}
}

customElements.define('dm-party', Party);
