import { LitElement, css, html } from 'lit';

class Headline extends LitElement {
	static styles = css`
    :host {
      --headline-font-size: var(--sub-title-font-size);
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
      width: 100%;
    }
  `;

	render() {
		return html`
      <div class="container">
        <h1>
          <slot></slot>
        </h1>
      </div>
    `;
	}
}

customElements.define('dm-headline', Headline);
