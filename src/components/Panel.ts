import { LitElement, css, html } from 'lit';

class Panel extends LitElement {
	static styles = css`
    :host {
      --panel-size: 600px;
      --panel-padding: 5%;
      --border-size: 5px;
      --border-color: #ffffff;
    }

    .panel-container {
      width: var(--panel-size);
      aspect-ratio: 1 / 1;
      border: solid var(--border-size) var(--border-color);
      box-sizing: border-box;
      padding: var(--panel-padding);
      overflow: hidden;
    }

    @media screen and (max-width: 600px) {
      :host {
        --panel-size: 90vw;
    }
  `;

	render() {
		return html`
      <div class="panel-container">
        <slot></slot>
      </div>
    `;
	}
}

customElements.define('dm-panel', Panel);
