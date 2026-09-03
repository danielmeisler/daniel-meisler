import { localized, msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';

@localized()
class Languages extends LitElement {
	static styles = css`
    :host {
      --text-color: var(--read-color);
    }

    .link {
      color: var(--text-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    ul {
      margin: 0;
    }
  `;

	render() {
		return html`
      <dm-headline>${msg('Programming / Scripting lang. ')}:</dm-headline>
      <dm-content>
        <ul>
          <li><a href="https://html.com" class="link" target="_blank" rel="noopener noreferrer">HTML</a></li>
          <li><a href="https://www.w3.org/Style/CSS/Overview.de.html" class="link" target="_blank" rel="noopener noreferrer">CSS</a> / <a href="https://sass-lang.com" class="link" target="_blank" rel="noopener noreferrer">SCSS</a></li>
          <li><a href="https://www.javascript.com" class="link" target="_blank" rel="noopener noreferrer">JavaScript</a> / <a href="https://www.typescriptlang.org" class="link" target="_blank" rel="noopener noreferrer">TypeScript</a></li>
          <li><a href="https://go.dev" class="link" target="_blank" rel="noopener noreferrer">Go</a></li>
          <li><a href="https://www.python.org" class="link" target="_blank" rel="noopener noreferrer">Python</a></li>
          <li><a href="https://www.java.com" class="link" target="_blank" rel="noopener noreferrer">Java</a></li>
          <li><a href="https://www.mysql.com" class="link" target="_blank" rel="noopener noreferrer">SQL</a></li>
        </ul>
      </dm-content>
    `;
	}
}

customElements.define('dm-skills-languages', Languages);
