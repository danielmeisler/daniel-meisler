import { LitElement, css, html } from 'lit';

class Blog extends LitElement {
	static styles = css`
    :host {
      
    }
  `;

	render() {
		return html`
      BLOG
    `;
	}
}

customElements.define('dm-blog', Blog);
