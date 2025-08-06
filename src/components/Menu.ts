import { LitElement, type TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import type { MenuType } from '../App.js';

export interface MenuItem {
	name: MenuType;
	label: string;
	content: TemplateResult;
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
      text-transform: lowercase;

      &:hover {
        text-decoration: underline;
      }
    }
  `;

	@property({ type: Array }) items: MenuItem[] = [];

	handleClick(event: Event) {
		const target = event.currentTarget as HTMLButtonElement;
		const menuItem = target.dataset.content;

		this.dispatchEvent(
			new CustomEvent('menu-select', {
				detail: { name: menuItem },
				bubbles: true,
				composed: true,
			}),
		);
	}

	render() {
		return html`
      <div class="menu-container">
        ${this.items.map(
					item => html`
            <button @click="${this.handleClick}" data-content="${item.name}">${item.label}</button>
          `,
				)}
      </div>
    `;
	}
}

customElements.define('dm-menu', Menu);
