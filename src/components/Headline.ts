import { LitElement, css, html } from 'lit';
import { query, state } from 'lit/decorators.js';

class Headline extends LitElement {
	static styles = css`
    :host {
      --headline-font-size: 40px;
      --gap-headline-content: 30px;
      --anim-time: calc(var(--steps) * 0.1s);
    }

    .container {
      display: inline-block;
      margin-bottom: var(--gap-headline-content);
    }

    h1 {
      font-size: var(--headline-font-size);
      font-weight: 600;
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      animation: typing var(--anim-time) steps(var(--steps));
    }

    @keyframes typing {
      from { width: 0 }
    }
  `;

	@query('slot') slotElement!: HTMLSlotElement;
	@state() characterTokens = 0;

	get slotCharacterLength(): number {
		const assignedNodes = this.slotElement?.assignedNodes({ flatten: true }) || [];
		let totalLength = 0;

		for (const node of assignedNodes) {
			if (node.nodeType === Node.TEXT_NODE) {
				totalLength += node.textContent?.length ?? 0;
			} else if (node.nodeType === Node.ELEMENT_NODE) {
				totalLength += node.textContent?.length ?? 0;
			}
		}

		return totalLength;
	}

	updated() {
		this.characterTokens = this.slotCharacterLength;
	}

	render() {
		return html`
      <style>
        :host {
          --steps: ${this.characterTokens};
        }
      </style>
      <div class="container">
        <h1>
          <slot></slot>
        </h1>
      </div>
    `;
	}
}

customElements.define('dm-headline', Headline);
