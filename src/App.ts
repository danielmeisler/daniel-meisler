import { LitElement, css, html } from 'lit';

class App extends LitElement {
	static styles = css`

	`;

	render() {
		return html`
			<dm-layout></dm-layout>
		`;
	}
}

customElements.define('dm-app', App);
