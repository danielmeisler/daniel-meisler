import { LitElement, css, html } from 'lit';

class Layout extends LitElement {
	static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    dm-logo {
      height: 100px;
      margin: 50px 0;
    }
  `;

	render() {
		return html`
      <div class="container">
        <dm-logo></dm-logo>
        <slot></slot>
        <dm-socials></dm-socials>
      </div>
    `;
	}
}

customElements.define('dm-layout', Layout);
