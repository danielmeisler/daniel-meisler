import { LitElement, css, html } from 'lit';

class Contact extends LitElement {
	static styles = css`
    :host {
      
    }
  `;

	render() {
		return html`
      <dm-headline>CONTACT</dm-headline>
    `;
	}
}

customElements.define('dm-contact', Contact);
