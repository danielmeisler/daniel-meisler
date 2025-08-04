import { LitElement, css, html } from 'lit';

class Layout extends LitElement {
	static styles = css`
  `;

	render() {
		return html`
      <div class="container">

      </div>
    `;
	}
}

customElements.define('dm-layout', Layout);
