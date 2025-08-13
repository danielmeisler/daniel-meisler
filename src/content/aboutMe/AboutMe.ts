import { localized, msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { getUserLanguage } from '../../services/localization.js';

@localized()
class AboutMe extends LitElement {
	static styles = css`
    :host {
      --gap-content: 30px;

      --speech-bubble-color: var(--background-color);
      --speech-bubble-height: 200px;
      --speech-bubble-width: 300px;
      --speech-bubble-font-size: 60px;
      --speech-bubble-text-font-size: 32px;

      --image-size: 200px;
      --image-scale: 1.1;
      --image-grayscale: 1;

      --image-text-color: #ffffff;
      --image-font-size: 30px;
      --image-anim-time: 0.5s;

      --border-color: var(--read-color);
      --border-size: 3px;

      --table-color: var(--read-color);
      --table-secondary-color: var(--read-secondary-color);
      --table-title-font-size: 24px;
      --table-text-font-size: 20px;
      --gap-tables: 20px;
    }

    .container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: var(--gap-content);
    }

    .header {
      display: flex;
      justify-content: space-between;
    }

    .speech-bubble-container {
      height: var(--speech-bubble-height);
      width: var(--speech-bubble-width);

      .text {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--speech-bubble-color);
      }

      .title {
        font-size: var(--speech-bubble-font-size);
        color: var(--speech-bubble-color);
        font-weight: 600;
      }

      .description {
        font-size: var(--speech-bubble-text-font-size);
        text-align: center;
      }
    }

    .image {
      width: var(--image-size);
      aspect-ratio: 1 / 1;
      position: relative;
      display: flex;

      img {
        height: 100%;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        transform: scale(1);
        transition: transform var(--image-anim-time) ease-in-out, filter var(--image-anim-time) ease-in-out;

        &:hover {
          transform: scale(var(--image-scale));
          filter: grayscale(var(--image-grayscale));
        }
      }

      &:hover::after {
        content: 'CLICK ME';
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: var(--image-font-size);
        text-align: center;
        color: var(--image-text-color);
        transform: translate(-50%, -50%);
        pointer-events: none;
        white-space: nowrap;
      }
    }

    .table-title {
      font-size: var(--table-title-font-size);
      font-weight: 600;
    }

    .info-content {
      width: 100%;
      height: fit-content;
      position: relative;
      border: solid var(--border-size) var(--border-color);
      box-sizing: border-box;
      padding: 3%;
      display: flex;
      flex-direction: column;
    }

    .table-container {
      display: flex;
      flex-direction: row;
      gap: var(--gap-tables);
    }

    .info-table {
			width: 50%;
      height: 50%;
      font-size: var(--table-text-font-size);
		}

		tr {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
		}

    th {
      font-weight: 400;
    }

    td {
      color: var(--table-secondary-color);
    }

    .bottom-wrapper {
      display: flex;
      flex-direction: row;
      height: 100%;
      width: 100%;
    }

    .language-content, .hobbies-content {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      position: relative;
      border: solid var(--border-size) var(--border-color);
      border-top: none;
      box-sizing: border-box;
      padding: 3%;
    }

    .hobbies-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      position: relative;
      border: solid var(--border-size) var(--border-color);
      border-top: none;
      box-sizing: border-box;
      padding: 3%;
      border-left: none;
    }

    .language-table {
      font-size: var(--table-text-font-size);
		}

    .hobbies-list {
      font-size: var(--table-text-font-size);
      margin: 0;
    }

    li {
      color: var(--table-secondary-color);
    }

    @media screen and (max-width: 600px) {
      :host {

        --speech-bubble-height: fit-content;
        --speech-bubble-width: 50%;
        --speech-bubble-font-size: 30px;
        --speech-bubble-text-font-size: 24px;

        --image-size: 40%;
        --image-font-size: 18px;

        --table-title-font-size: 24px;
        --table-text-font-size: 20px;
        --gap-tables: 20px;
      }

      .header {
        display: flex;
        align-items: center;
      }

      .table-container {
        flex-direction: column;
        gap: 0;
      }

      .info-table {
        width: 100%;
        height: 100%;
      }

      .bottom-wrapper {
        flex-direction: column;
      }

      .language-content, .hobbies-content {
        width: 100%;
      }

      .hobbies-content {
        border-left: solid var(--border-size) var(--border-color);
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

	getAge(birthDate: Date) {
		const today = new Date();

		let years = today.getFullYear() - birthDate.getFullYear();

		if (
			today.getMonth() < birthDate.getMonth() ||
			(today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
		) {
			years--;
		}

		return years;
	}

	getBirthdate(birthDate: Date) {
		const currentLanguage = getUserLanguage();

		return new Intl.DateTimeFormat(currentLanguage).format(birthDate);
	}

	render() {
		return html`
      <div class="container">
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
          <div class="info-content">
            <div class="table-title">${msg('Informations')}:</div>
            <div class="table-container">
              <table class="info-table">
                <tbody>
                  <tr>
                    <th scope="row">${msg('age')}:</th>
                    <td>${this.getAge(new Date('09/24/1999'))}</td>
                  </tr>
                  <tr>
                    <th scope="row">${msg('birth date')}:</th>
                    <td>${this.getBirthdate(new Date('09/24/1999'))}</td>
                  </tr>
                  <tr>
                    <th scope="row">${msg('birth place')}:</th>
                    <td>Bad Säckingen</td>
                  </tr>
                </tbody>
              </table>
              <table class="info-table">
                <tbody>
                  <tr>
                    <th scope="row">${msg('nationality')}:</th>
                    <td>${msg('German')}</td>
                  </tr>
                  <tr>
                    <th scope="row">${msg('domicile')}:</th>
                    <td>Mannheim</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bottom-wrapper">
            <div class="language-content">
              <div class="table-title">${msg('Languages')}:</div>
              <table class="language-table">
                <tbody>
                  <tr>
                    <th scope="row">${msg('German')}:</th>
                    <td>${msg('Native language')}</td>
                  </tr>
                  <tr>
                    <th scope="row">${msg('Russian')}:</th>
                    <td>${msg('Native language')}</td>
                  </tr>
                  <tr>
                    <th scope="row">${msg('English')}:</th>
                    <td>${msg('Fluent')}</td>
                  </tr>
                  <tr>
                    <th scope="row">${msg('Spanish')}:</th>
                    <td>${msg('Basics')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
    
            <div class="hobbies-content">
              <div class="table-title">${msg('Hobbies')}:</div>
                <ul class="hobbies-list">
                  <li>${msg('Cooking')}</li>
                  <li>${msg('Drawing')}</li>
                  <li>${msg('Electric guitar')}</li>
                  <li>${msg('Gaming')}</li>
                </ul>
            </div>
          </div>
        </dm-content>
      </div>
    `;
	}
}

customElements.define('dm-about-me', AboutMe);
