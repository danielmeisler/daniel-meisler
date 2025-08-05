import { LitElement, css, html } from 'lit';

class Socials extends LitElement {
	static styles = css`
    :host {

    }
  `;

	render() {
		return html`
      <div class="socials-container">
        
      </div>
    `;
	}
}

customElements.define('dm-socials', Socials);
