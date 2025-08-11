import { msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';

class School extends LitElement {
	static styles = css`
    :host {
      --gap-content: 20px;
      --link-color: var(--read-color);
      --link-hover-color: #00CC7E;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: var(--gap-content);
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
      <dm-headline>${msg('Educational Background')}</dm-headline>
      <dm-content>
        <div class="content">
          <dm-career-section mode="left">
            <div slot="date">2019 - 2023</div>
            <div slot="title">${msg('Computer Science in Media')}</div>
            <div slot="sub-title">
              <a href="https://www.hs-furtwangen.de" target="_blank" rel="noopener noreferrer">${msg('Furtwangen University')}</a>
            </div>
            <ul>
              <li>${msg('Bachelor of Science')}</li>
            </ul>
          </dm-career-section>

          <dm-career-section mode="right">
            <div slot="date">2016 - 2019</div>
            <div slot="title">${msg('Major in Computer Science')}</div>
            <div slot="sub-title">
              <a href="https://www.ghse.de" target="_blank" rel="noopener noreferrer">Gewerbliche und Hauswirtschaftlich Sozialpflegerische Schulen Emmendingen</a>
            </div>
            <ul>
              <li>${msg('General higher education entrance qualification (Abitur)')}</li>
            </ul>
          </dm-career-section>

          <dm-career-section mode="left">
            <div slot="date">2006 - 2016</div>
            <div slot="title">${msg('Elementary and secondary school')}</div>
            <div slot="sub-title">
              <a href="https://herbolzheim.adventisten.schule" target="_blank" rel="noopener noreferrer">Elisa-Schule Herbolzheim </a>
            </div>
            <ul>
              <li>${msg('General Certificate of Secondary Education')}</li>
            </ul>
          </dm-career-section>
        </div>
      </dm-content>
    `;
	}
}

customElements.define('dm-school', School);
