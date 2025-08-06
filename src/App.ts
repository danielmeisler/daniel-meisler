import { msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';
import type { MenuItem } from './components/Menu.js';

export type MenuType = 'menu' | 'aboutMe' | 'career' | 'skills' | 'blog' | 'contact';

class App extends LitElement {
	static styles = css`
		.content {
			position: relative;
		}

		.back-button {
			height: 30px;
			aspect-ratio: 1 / 1;
			padding: 0;
			background: none;
			border: none;
			cursor: pointer;
			position: absolute;
			right: 100%;
			margin-right: 20px;

			.back-icon {
				height: 100%;
				width: 100%;
				fill: white;
			}
		}
	`;

	@state() currentMenu: MenuType = 'menu';

	menuItems: MenuItem[] = [
		{
			name: 'aboutMe',
			label: msg('about me'),
			content: html`<dm-about-me></dm-about-me>`,
		},
		{
			name: 'career',
			label: msg('career'),
			content: html`<dm-career></dm-career>`,
		},
		{
			name: 'skills',
			label: msg('skills'),
			content: html`<dm-skills></dm-skills>`,
		},
		{
			name: 'blog',
			label: msg('blog'),
			content: html`<dm-blog></dm-blog>`,
		},
		{
			name: 'contact',
			label: msg('contact'),
			content: html`<dm-contact></dm-contact>`,
		},
	];

	handleMenuSelect(event: CustomEvent) {
		const selected = event.detail.name as MenuType;
		this.currentMenu = selected;
	}

	renderContent() {
		if (this.currentMenu === 'menu') {
			return html`
					<dm-menu .items=${this.menuItems} @menu-select=${this.handleMenuSelect}></dm-menu></dm-menu>
				`;
		}

		return this.menuItems.find(item => item.name === this.currentMenu)?.content ?? html``;
	}

	renderBackButton() {
		return html`
			<button class="back-button" @click="${() => {
				this.currentMenu = 'menu';
			}}">
				<svg class="back-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 90">
					<polygon class="cls-1" points="90 20 80 20 70 20 60 20 50 20 50 10 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 0 40 0 50 10 50 10 60 20 60 20 70 30 70 30 80 40 80 40 90 50 90 50 80 50 70 60 70 70 70 80 70 90 70 100 70 100 60 100 50 100 40 100 30 100 20 90 20"/>
				</svg>
			</button>
		`;
	}

	render() {
		return html`
			<dm-layout>
				<div class="content">
					<!-- ${this.renderBackButton()} -->
					${this.currentMenu !== 'menu' ? this.renderBackButton() : ''}
					<dm-panel>
						${this.renderContent()}
					</dm-panel>
				</div>
			</dm-layout>
		`;
	}
}

customElements.define('dm-app', App);
