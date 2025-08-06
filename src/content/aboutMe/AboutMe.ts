import { LitElement, css, html } from 'lit';

class AboutMe extends LitElement {
	static styles = css`
    :host {

    }
  `;

	render() {
		return html`
      <div>ABOUT ME</div>
    `;
	}
}

customElements.define('dm-about-me', AboutMe);
