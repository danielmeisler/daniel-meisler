import { msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';

class AboutMe extends LitElement {
	static styles = css`
    :host {
      --image-padding: 30px;
      --image-size: 200px;
    }

    .content {
      height: 100%;
      width: 100%;
      position: relative;
    }

    .image {
      height: var(--image-size);
      aspect-ratio: 1 / 1;
      position: absolute;
      top: var(--image-padding);
      right: var(--image-padding);

      img {
        height: 100%;
        border-radius: 50%;
        cursor: pointer;
        transform: scale(1);
        transition: transform 0.5s ease-in-out;

        &:hover {
          content: 'TEST';
          transform: scale(1.1);
        }
      }
    }
  `;

	@state() imageUrl = '';
	#currentIndex = 0;

	connectedCallback() {
		super.connectedCallback();
		this.imageUrl = `./assets/img/me_${this.getRandom()}.png`;
	}

	disconnectedCallback() {
		super.disconnectedCallback();
	}

	getNewImage() {
		let newIndex = 0;
		do {
			newIndex = this.getRandom();
		} while (this.#currentIndex === newIndex);

		this.#currentIndex = newIndex;
		this.imageUrl = `./assets/img/me_${newIndex}.png`;
	}

	getRandom() {
		return Math.floor(Math.random() * 5 + 1);
	}

	render() {
		return html`
      <dm-headline>${msg(`Heyho, I'm Daniel!`)}</dm-headline>
      <div class="image">
        <img @click="${this.getNewImage}" src="${this.imageUrl}">
      </div>
      <dm-content>
        <div class="content">
        </div>
      </dm-content>
    `;
	}
}

customElements.define('dm-about-me', AboutMe);
