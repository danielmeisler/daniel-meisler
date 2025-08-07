import { LitElement, css, html } from 'lit';
import { SwitchMenu } from '../events/SwitchMenu.js';

class BackButton extends LitElement {
	static styles = css`
    :host {
      --button-size: 30px;
      --gap-arrows-text: 20px;
      --anim-shift: -20%;
      --anim-time: 0.5s;
    }

    .back-button {
      height: var(--button-size);
      aspect-ratio: 1 / 1;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;

      .back-icon {
        height: 100%;
        width: 100%;
        fill: white;
      }

      &:hover {
        animation: back-anim var(--anim-time) ease-in-out infinite;
      }
    }

    @keyframes back-anim {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateX(var(--anim-shift));
      }
    }
  `;

	handleClick() {
		this.dispatchEvent(
			new CustomEvent(SwitchMenu.name, {
				detail: { menu: 'menu' },
				bubbles: true,
				composed: true,
			}),
		);
	}

	render() {
		return html`
			<button class="back-button" @click="${this.handleClick}">
				<svg class="back-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60">
					<rect class="cls-1" x="60" y="20" width="40" height="20"/>
					<polyline class="cls-1" points="50 60 0 30 50 0"/>
				</svg>
			</button>
    `;
	}
}

customElements.define('dm-back-button', BackButton);
