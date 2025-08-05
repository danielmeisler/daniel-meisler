import { msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';
import type { MenuItem } from './components/Menu.js';

class App extends LitElement {
	static styles = css`

	`;

	menuItems: MenuItem[] = [
		{
			name: 'about me',
			label: msg('about me'),
		},
		{
			name: 'career',
			label: msg('career'),
		},
		{
			name: 'skills',
			label: msg('skills'),
		},
		{
			name: 'blog',
			label: msg('blog'),
		},
		{
			name: 'contact',
			label: msg('contact'),
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
