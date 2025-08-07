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

			&:hover {
				animation: back-anim 0.5s ease-in-out infinite;
			}
		}

		@keyframes back-anim {
			0%, 100% {
				transform: translateY(0);
			}
			50% {
				transform: translateX(-20%);
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
			content: [html`<dm-skills></dm-skills>`, html`<dm-skills></dm-skills>`],
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
				<svg class="back-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60">
					<rect class="cls-1" x="60" y="20" width="40" height="20"/><polyline class="cls-1" points="50 60 0 30 50 0"/>
				</svg>
			</button>
		`;
	}

	render() {
		return html`
			<dm-layout>
				<div class="content">
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
