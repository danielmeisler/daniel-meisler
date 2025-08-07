import { LitElement, css, html } from 'lit';

class AboutMe extends LitElement {
	static styles = css`
    :host {

    }
  `;

	render() {
		return html`
      <dm-headline>ABOUT ME</dm-headline>
    `;
	}
}

customElements.define('dm-about-me', AboutMe);
