import { msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';

class AboutMe extends LitElement {
	static styles = css`
    :host {
      --image-size: 200px;
      --border-size: 3px;
      --border-color: var(--read-color);
    }

    .header {
      display: flex;
      justify-content: space-between;
    }

    .speech-bubble-container {
      height: 200px;
      width: 300px;

      .text {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .title {
        font-size: 60px;
        font-weight: 600;
      }

      .description {
        text-align: center;
      }
    }

    .content {
      height: 100%;
      width: 100%;
      position: relative;
      border: solid var(--border-size) var(--border-color);
      margin-top: 30px;
      box-sizing: border-box;
      padding: 3%;
    }

    .image {
      height: var(--image-size);
      aspect-ratio: 1 / 1;

      img {
        height: 100%;
        border-radius: 50%;
        cursor: pointer;
        transform: scale(1);
        transition: transform 0.5s ease-in-out;

        &:hover {
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
      <div class="header">
        <div class="speech-bubble-container">
          <dm-speech-bubble>
            <div class="text">
              <div class="title">
                ${msg('Heyho!')}
              </div>
              <div class="description">
                <div>${msg(`I'm Daniel,`)}</div>
                <div>${msg('nice to meet you.')}</div>
              </div>  
            </div>
          </dm-speech-bubble>
        </div>
        <div class="image">
          <img @click="${this.getNewImage}" src="${this.imageUrl}">
        </div>
      </div>
      <dm-content>
        <div class="content">
Test
        </div>
      </dm-content>
    `;
	}
}

customElements.define('dm-about-me', AboutMe);
