import { msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';

class Tools extends LitElement {
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
  `;

	render() {
		return html`
      <dm-headline>${msg('Frameworks / Libraries / Tools')}:</dm-headline>

      <ul>
        <li><a href="https://react.dev" class="link" target="_blank" rel="noopener noreferrer">React</a> / <a href="https://nextjs.org" class="link" target="_blank" rel="noopener noreferrer">Next.js</a></li>
        <li><a href="https://lit.dev" class="link" target="_blank" rel="noopener noreferrer">Lit</a></li>
        <li><a href="https://vite.dev" class="link" target="_blank" rel="noopener noreferrer">Vite</a> / <a href="https://storybook.js.org" class="link" target="_blank" rel="noopener noreferrer">Storybook</a></li>
        <li><a href="https://nodejs.org" class="link" target="_blank" rel="noopener noreferrer">Node.js</a></li>
        <li><a href="https://www.docker.com" class="link" target="_blank" rel="noopener noreferrer">Docker</a></li>
      </ul>
    `;
	}
}

customElements.define('dm-skills-tools', Tools);
