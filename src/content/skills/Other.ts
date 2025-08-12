import { localized, msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';

@localized()
class Other extends LitElement {
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
      <dm-headline>${msg('Other')}:</dm-headline>
      <dm-content>
        <ul>
          <li><a href="https://git-scm.com" class="link" target="_blank" rel="noopener noreferrer">Git</a></li>
          <li><a href="https://figma.com" class="link" target="_blank" rel="noopener noreferrer">Figma</a></li>
          <li><a href="https://www.blender.org" class="link" target="_blank" rel="noopener noreferrer">Blender</a></li>
          <li><a href="https://www.adobe.com/de/products/illustrator.html" class="link" target="_blank" rel="noopener noreferrer">Adobe Illustrator</a></li>
          <li><a href="https://www.adobe.com/de/products/photoshop.html" class="link" target="_blank" rel="noopener noreferrer">Adobe Photoshop</a></li>
          <li><a href="https://www.adobe.com/de/products/aftereffects.html" class="link" target="_blank" rel="noopener noreferrer">Adobe After Effects</a></li>
        </ul>
      </dm-content>
    `;
	}
}

customElements.define('dm-skills-other', Other);
