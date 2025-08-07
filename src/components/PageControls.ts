import { msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { SwitchPage } from '../events/SwitchPage.js';

class PageControls extends LitElement {
	static styles = css`
    :host {
      --font-size: 24px;
      --button-size: 26px;
      --gap-arrows-text: 20px;
      --anim-shift: 20%;
      --anim-time: 0.5s;
    }

    .page-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--gap-arrows-text);
    }

    .page-counter {
      font-size: var(--font-size);
    }

    .left-button {
      height: var(--button-size);
      aspect-ratio: 1 / 1;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;

      .left-icon {
        height: 100%;
        width: 100%;
        fill: white;
      }

      &:hover {
        animation: left-anim var(--anim-time) ease-in-out infinite;
      }
    }

    .right-button {
      height: var(--button-size);
      aspect-ratio: 1 / 1;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;

      .right-icon {
        height: 100%;
        width: 100%;
        fill: white;
      }

      &:hover {
        animation: right-anim var(--anim-time) ease-in-out infinite;
      }
    }

    @keyframes left-anim {
			0%, 100% {
				transform: translateY(0);
			}
			50% {
				transform: translateX(calc(var(--anim-shift) * -1));
			}
		}

		@keyframes right-anim {
			0%, 100% {
				transform: translateY(0);
			}
			50% {
				transform: translateX(var(--anim-shift));
			}
		}
  `;

	@property({ type: Number, attribute: 'current-page' }) currentPage = 1;
	@property({ type: Number, attribute: 'max-pages' }) maxPages = 0;

	handleLeftClick() {
		this.currentPage = this.checkBounds(this.currentPage - 1);
		this.dispatchEvent(
			new CustomEvent(SwitchPage.name, {
				detail: { page: this.currentPage },
				bubbles: true,
				composed: true,
			}),
		);
	}

	handleRightClick() {
		this.currentPage = this.checkBounds(this.currentPage + 1);
		this.dispatchEvent(
			new CustomEvent(SwitchPage.name, {
				detail: { page: this.currentPage },
				bubbles: true,
				composed: true,
			}),
		);
	}

	checkBounds(page: number) {
		let newPage = page;

		if (page < 1) {
			newPage = this.maxPages;
		}
		if (page > this.maxPages) {
			newPage = 1;
		}

		return newPage;
	}

	render() {
		return html`
			<div class="page-controls">
				<button class="left-button" @click="${this.handleLeftClick}">
					<svg class="left-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60">
						<rect class="cls-1" x="60" y="20" width="40" height="20"/>
						<polyline class="cls-1" points="50 60 0 30 50 0"/>
					</svg>
				</button>

				<div class="page-counter">${msg('Page')} ${this.currentPage} / ${this.maxPages}</div>

				<button class="right-button" @click="${this.handleRightClick}">
					<svg class="right-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60">
						<rect class="cls-1" x="0" y="20" width="40" height="20"/>
						<polyline class="cls-1" points="50 0 100 30 50 60"/>
					</svg>
				</button>
			</div>
    `;
	}
}

customElements.define('dm-page-controls', PageControls);
