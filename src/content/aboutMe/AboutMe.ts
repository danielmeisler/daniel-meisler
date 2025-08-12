import { msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { getUserLanguage } from '../../services/localization.js';

class AboutMe extends LitElement {
	static styles = css`
    .container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;
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

    .image {
      height: 200px;
      aspect-ratio: 1 / 1;
      position: relative;

      img {
        height: 100%;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        transform: scale(1);
        transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;

        &:hover {
          transform: scale(1.1);
          filter: grayscale(1);
        }
      }

      &:hover::after {
        content: 'CLICK ME';
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 30px;
        text-align: center;
        color: white;
        transform: translate(-50%, -50%);
        pointer-events: none;
        white-space: nowrap;
      }
    }

    .table-title {
      font-size: 24px;
      font-weight: 600;
    }

    .info-content {
      height: fit-content;
      width: 100%;
      position: relative;
      border: solid 3px var(--read-color);
      box-sizing: border-box;
      padding: 3%;
      display: flex;
      flex-direction: column;
    }

    .table-container {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }

    .info-table {
			width: 50%;
      height: 50%;
      font-size: 20px;
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
      color: var(--read-secondary-color);
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
      display: flex;
      flex-direction: column;
      position: relative;
      border: solid var(--border-size) var(--border-color);
      border-top: none;
      box-sizing: border-box;
      padding: 3%;
      border-left: none;
      width: 50%;
    }

    .language-table {
      font-size: 20px;
		}

    .hobbies-list {
      font-size: 20px;
      margin: 0;
    }

    li {
      color: var(--read-secondary-color);
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
                    <td>${msg('german')}</td>
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
