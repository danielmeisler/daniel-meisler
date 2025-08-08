import { LitElement, css, html } from 'lit';

class Settings extends LitElement {
	static styles = css`
    :host {
      
    }
  `;

	render() {
		return html`
      <dm-headline>SETTINGS</dm-headline>
    `;
	}
}

customElements.define('dm-settings', Settings);
