import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';

export interface MenuItem {
	name: string;
	label: string;
}

class Menu extends LitElement {
	static styles = css`
    :host {
      --gap-items: 30px;
      --menu-color: var(--font-color);
      --menu-size: var(--title-font-size);
    }

    .menu-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--gap-items);
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      font-family: var(--text-font);
      font-size: var(--menu-size);
      color: var(--menu-color);

      &:hover {
        text-decoration: underline;
      }
    }
  `;

	@property({ attribute: false }) items!: MenuItem[];

	render() {
		return html`
      <div class="menu-container">
        ${this.items.map(
					item => html`
            <button>${item.label}</button>
          `,
				)}
      </div>
    `;
	}
}

customElements.define('dm-menu', Menu);
