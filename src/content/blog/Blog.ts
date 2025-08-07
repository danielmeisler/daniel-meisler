import { LitElement, css, html } from 'lit';

class Blog extends LitElement {
	static styles = css`
    :host {
      
    }
  `;

	render() {
		return html`
      <dm-headline>BLOG</dm-headline>
    `;
	}
}

customElements.define('dm-blog', Blog);
