import { LitElement, css, html } from 'lit';

class Skills extends LitElement {
	static styles = css`
    :host {
      
    }
  `;

	render() {
		return html`
      SKILLS
    `;
	}
}

customElements.define('dm-skills', Skills);
