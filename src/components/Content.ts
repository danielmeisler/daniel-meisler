import { LitElement, css, html } from 'lit';
import { query, state } from 'lit/decorators.js';

class Content extends LitElement {
	static styles = css`
    :host {
      --anim-time: calc(var(--steps) * 0.005s);
			flex: 1 0 auto;
    }

    .container {
      height: 100%;
			width: 100%;
			display: flex;
    	flex-direction: column;
    }

    @keyframes typing {
      from { height: 0 }
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
        <slot></slot>
      </div>
    `;
	}
}

customElements.define('dm-content', Content);
