import { LitElement, css, html } from 'lit';

class Languages extends LitElement {
	static styles = css`
    :host {
      
    }
  `;

	render() {
		return html`
      <dm-headline>LANGUAGES</dm-headline>
    `;
	}
}

customElements.define('dm-skills-languages', Languages);
