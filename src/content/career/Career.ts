import { LitElement, css, html } from 'lit';

class Career extends LitElement {
	static styles = css`
    :host {
      
    }
  `;

	render() {
		return html`
      CAREER
    `;
	}
}

customElements.define('dm-career', Career);
