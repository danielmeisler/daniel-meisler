import { msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';
import type { MenuItem } from './components/Menu.js';

class App extends LitElement {
	static styles = css`

	`;

	menuItems: MenuItem[] = [
		{
			name: 'about me',
			label: msg('About me'),
		},
		{
			name: 'career',
			label: msg('Career'),
		},
		{
			name: 'skills',
			label: msg('Skills'),
		},
		{
			name: 'blog',
			label: msg('Blog'),
		},
		{
			name: 'contact',
			label: msg('Contact'),
		},
	];

	render() {
		return html`
			<dm-layout>
				<dm-panel>
					<dm-menu .items="${this.menuItems}"></dm-menu>
				</dm-panel>
			</dm-layout>
		`;
	}
}

customElements.define('dm-app', App);
