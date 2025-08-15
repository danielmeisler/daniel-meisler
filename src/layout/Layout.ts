import { LitElement, css, html } from 'lit';

class Layout extends LitElement {
	static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }


    @media screen and (max-width: 700px) {
			.container {
				padding-bottom: 20px;
			}
    }
  `;

	render() {
		return html`
      <div class="container">
        <dm-logo></dm-logo>
        <slot></slot>
      </div>
    `;
	}
}

customElements.define('dm-layout', Layout);
