import { LitElement, css, html } from 'lit';

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
  `;

	render() {
		return html`
      <div class="container">
        <slot></slot>
      </div>
    `;
	}
}

customElements.define('dm-content', Content);
