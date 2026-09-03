import { localized, msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';

@localized()
class Current extends LitElement {
	static styles = css`
    :host {
      --link-color: var(--read-color);
      --link-hover-color: #EE1C4E;
    }

    .container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .image-container {
      align-self: flex-end;
      transform: rotate(-10deg);
    }

    a {
      text-decoration: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: var(--link-color);

      &:hover {
        text-decoration: underline;
        color: var(--link-hover-color);
      }
    }

    ul {
      margin: 0;
    }

    @media screen and (max-width: 700px) {
      .content {
        gap: 50px;
      }
    }
  `;

	render() {
		return html`
      <div class="container">
        <dm-headline>${msg('Current Profession')}:</dm-headline>
        <dm-content>
          <div class="content">
            <dm-career-section mode="left">
              <div slot="date">11.2025 - ${msg('today')}</div>
              <div slot="title">${msg('Webdeveloper')}</div>
              <div slot="sub-title">
                <a href="https://foolsparadise.de" target="_blank" rel="noopener noreferrer">foolsparadise GmbH</a>
              </div>
              <ul>
                <li>${msg('Full-Stack development of web applications')}</li>
                <li>${msg('Next.js, React')}</li>
                <li>${msg('TypeScript, Go, HTML, SCSS,')}</li>
                <li>${msg('Docker, MySQL')}</li>
              </ul>
            </dm-career-section>
            <div class="image-container">
              <dm-beyblade></dm-beyblade>
            </div>
          </div>
        </dm-content>
      </div>
    `;
	}
}

customElements.define('dm-current', Current);
