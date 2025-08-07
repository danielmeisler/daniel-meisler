import { LitElement, css, html } from 'lit';

class Tools extends LitElement {
	static styles = css`
    :host {
      
    }
  `;

	render() {
		return html`
      <dm-headline>TOOLS</dm-headline>
    `;
	}
}

customElements.define('dm-skills-tools', Tools);
