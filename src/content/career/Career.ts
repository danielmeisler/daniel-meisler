import { localized, msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';

@localized()
class Career extends LitElement {
	static styles = css`
    :host {
      --link-color: var(--read-color);
      --link-hover-color: #dd0099;
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
      justify-content: space-evenly;
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
  `;

	render() {
		return html`
      <div class="container">
        <dm-headline>${msg('Professional Experience')}:</dm-headline>
        <dm-content>
          <div class="content">
          <dm-career-section mode="left">
            <div slot="date">10.2023 - ${msg('today')}</div>
            <div slot="title">${msg('Web and cloud software developer')}</div>
            <div slot="sub-title">
              <a href="https://www.thenativeweb.io/" target="_blank" rel="noopener noreferrer">the native web GmbH</a>
            </div>
            <ul>
              <li>${msg('Development of web applications')}</li>
              <li>${msg('Development of scalable microservices')}</li>
            </ul>
          </dm-career-section>

          <dm-career-section mode="right">
            <div slot="date">10.2022 - 01.2023</div>
            <div slot="title">${msg('Web and cloud software developer')}</div>
            <div slot="sub-title">
              <a href="https://www.thenativeweb.io/" target="_blank" rel="noopener noreferrer">the native web GmbH</a>
            </div>
            <ul>
              <li>${msg('Working student')}</li>
            </ul>
          </dm-career-section>

          <dm-career-section mode="left">
            <div slot="date">03.2021 - 07.2021</div>
            <div slot="title">${msg('Web and cloud software developer')}</div>
            <div slot="sub-title">
              <a href="https://www.thenativeweb.io/" target="_blank" rel="noopener noreferrer">the native web GmbH</a>
            </div>
            <ul>
              <li>${msg('Internship semester')}</li>
            </ul>
          </dm-career-section>
          </div>
        </dm-content>
      </div>
    `;
	}
}

customElements.define('dm-career', Career);
