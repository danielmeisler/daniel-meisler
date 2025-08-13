import { localized, msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';

@localized()
class Contact extends LitElement {
	static styles = css`
    :host {
      --icon-color: var(--read-secondary-color);
      --icon-size: 25px;

      --text-font-size: var(--text-font-size);
      --text-color: var(--read-color);
      --link-color: var(--read-secondary-color);

      --gap-content: 50px;
      --gap-logo-link: 10px;
    }

    .container {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }

    .contact-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: var(--text-color);
      font-size: var(--text-font-size);
    }

    .contact-section {
      display: flex;
      flex-direction: column;
    }

    .icon {
      height: var(--icon-size);
      aspect-ratio: 1 / 1;
      fill: var(--icon-color);
    }

    a {
      text-decoration: none;
      color: var(--link-color);
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: var(--gap-logo-link);

      &:hover {
        color: var(--hover-color);
        text-decoration: underline;

        svg {
          fill: var(--hover-color);
        }
      }
    }

		@media screen and (max-width: 700px) {
      .contact-container {
        gap: 50px;
      }
    }
  `;

	render() {
		return html`
      <div class="container">
        <dm-headline>${msg('Contact')}:</dm-headline>
        <dm-content>
          <div class="contact-container">
            <div class="contact-section">
              ${msg('Contact me via mail')}
              <a href="mailto:daniel_meisler@web.de" style="--hover-color: #FFD800" target="_blank" rel="noopener noreferrer">
                <svg class="icon" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                  <g id="mail-filled">
                    <path d="M24,5.7V21H0V5.7l12,10L24,5.7z M12,13l12-9.9V3H0v0.1L12,13z"/>
                  </g>
                </svg>
                daniel_meisler@web.de
              </a>
            </div>

            <div class="contact-section">
              ${msg('Check out my Instagram')}
              <a href="https://www.instagram.com/daniel.meisler" style="--hover-color: #FE0B5D" target="_blank" rel="noopener noreferrer">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                  <path class="cls-1" d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" transform="translate(-2.5 -2.5)"/>
                </svg>
                @daniel.meisler
              </a>
            </div>

            <div class="contact-section">
              ${msg('Find my projects on GitHub')}
              <a href="https://github.com/danielmeisler" style="--hover-color: #652684" target="_blank" rel="noopener noreferrer">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.63 96">
                  <path class="cls-1" d="M48.85,0C21.84,0,0,22,0,49.22c0,21.76,13.99,40.17,33.4,46.69,2.43.49,3.32-1.06,3.32-2.36,0-1.14-.08-5.05-.08-9.13-13.59,2.93-16.42-5.87-16.42-5.87-2.18-5.7-5.42-7.17-5.42-7.17-4.45-3.01.32-3.01.32-3.01,4.93.33,7.52,5.05,7.52,5.05,4.37,7.5,11.4,5.38,14.24,4.07.4-3.18,1.7-5.38,3.07-6.6-10.84-1.14-22.24-5.38-22.24-24.28,0-5.38,1.94-9.78,5.01-13.2-.49-1.22-2.18-6.27.49-13.04,0,0,4.12-1.3,13.43,5.05,3.98-1.08,8.09-1.63,12.21-1.63,4.13,0,8.33.57,12.21,1.63,9.3-6.36,13.43-5.05,13.43-5.05,2.67,6.76.97,11.82.49,13.04,3.15,3.42,5.01,7.82,5.01,13.2,0,18.91-11.4,23.06-22.32,24.28,1.78,1.55,3.32,4.48,3.32,9.13,0,6.6-.08,11.9-.08,13.53,0,1.3.89,2.85,3.32,2.36,19.41-6.52,33.4-24.93,33.4-46.69.08-27.22-21.84-49.22-48.77-49.22Z"/>
                </svg>
                danielmeisler
              </a>
            </div>

            <div class="contact-section">
              ${msg('Discover my LinkedIn profile')}
              <a href="https://www.linkedin.com/in/daniel-meisler-22361a379" style="--hover-color: #0A66C2" target="_blank" rel="noopener noreferrer">
                <svg enable-background="new 0 0 56.693 56.693" class="icon" version="1.1" viewBox="0 0 56.693 56.693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g>
                    <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"/>
                    <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12 c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88 C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078 c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179 c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"/>
                  </g>
                </svg>
                Daniel Meisler
              </a>
            </div>
          </div>
        </dm-content>
      </div>
    `;
	}
}

customElements.define('dm-contact', Contact);
