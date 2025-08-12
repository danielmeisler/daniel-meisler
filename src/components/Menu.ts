import { localized } from '@lit/localize';
import { LitElement, type TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import type { MenuType } from '../App.js';
import { SwitchMenu } from '../events/SwitchMenu.js';

export interface MenuItem {
	name: MenuType;
	label: string;
	content: TemplateResult | TemplateResult[];
}

@localized()
class Menu extends LitElement {
	static styles = css`
    :host {
      --menu-color: var(--read-color);
      --menu-size: var(--title-font-size);
      --gap-items: 30px;

      --gap-text-underline: 8%;
      --underline-height: 3px;
      --underline-width: 90%;
      --underline-color: var(--read-color);
      --underline-anim-time: 0.1s;
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
      position: relative;
      background: none;
      border: none;
      cursor: pointer;
      font-family: var(--text-font);
      font-size: var(--menu-size);
      color: var(--menu-color);
      text-transform: lowercase;

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: var(--gap-text-underline);
        height: var(--underline-height);
        width: var(--underline-width);
        background-color: var(--underline-color);
        transform: translateX(-50%) scaleX(0);
        transition: transform var(--underline-anim-time) ease-in-out;
      }

      &:hover {
        &::before {
          transform: translateX(-50%) scaleX(1);
        }
      }
    }
  `;

	@property({ type: Array }) items: MenuItem[] = [];

	handleClick(event: Event) {
		const target = event.currentTarget as HTMLButtonElement;
		const menuItem = target.dataset.content;

		this.dispatchEvent(
			new CustomEvent(SwitchMenu.name, {
				detail: { menu: menuItem },
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
