import { msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';
import type { MenuItem } from './components/Menu.js';
import { SwitchMenu } from './events/SwitchMenu.js';
import { SwitchPage } from './events/SwitchPage.js';
import { initLanguage } from './services/localization.js';

export type MenuType = 'menu' | 'settings' | 'aboutMe' | 'career' | 'skills' | 'blog' | 'contact';

class App extends LitElement {
	static styles = css`
		.content {
			position: relative;
			display: flex;
		}

		dm-back-button {
			position: absolute;
      right: 100%;
			margin-right: 15px;
		}

		dm-socials {
			position: absolute;
			left: 100%;
			margin-left: 15px;
		}

		dm-page-controls {
			margin-top: 10px;
		}
	`;

	@state() currentMenu: MenuType = 'menu';
	@state() currentPage = 1;

	#handleMenuSwitch = this.handleMenuSwitch.bind(this) as EventListener;
	#handlePageSwitch = this.handlePageSwitch.bind(this) as EventListener;

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
			content: [
				html`<dm-skills-languages></dm-skills-languages>`,
				html`<dm-skills-tools></dm-skills-tools>`,
				html`<dm-skills-other></dm-skills-other>`,
			],
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

	connectedCallback() {
		super.connectedCallback();
		initLanguage();
		this.addEventListener(SwitchMenu.name, this.#handleMenuSwitch);
		this.addEventListener(SwitchPage.name, this.#handlePageSwitch);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener(SwitchMenu.name, this.#handleMenuSwitch);
		this.removeEventListener(SwitchPage.name, this.#handlePageSwitch);
	}

	handleMenuSwitch(event: SwitchMenu) {
		this.currentMenu = event.detail.menu as MenuType;
	}

	handlePageSwitch(event: SwitchPage) {
		this.currentPage = event.detail.page;
	}

	renderContent() {
		if (this.currentMenu === 'menu') {
			this.currentPage = 1;
			return html`
					<dm-menu .items=${this.menuItems}></dm-menu></dm-menu>
				`;
		}

		if (this.currentMenu === 'settings') {
			return html`
					<dm-settings></dm-settings>
				`;
		}

		return this.menuItems.find(item => item.name === this.currentMenu)?.content ?? html``;
	}

	render() {
		const content = this.renderContent();
		return html`
			<dm-layout>
				<div class="content">
					${this.currentMenu !== 'menu' ? html`<dm-back-button></dm-back-button>` : ''}
					<dm-panel>
						${Array.isArray(content) ? content[this.currentPage - 1] : content}
					</dm-panel>
					<dm-socials></dm-socials>
				</div>
				${Array.isArray(content) ? html`<dm-page-controls current-page="${this.currentPage}" max-pages="${content.length}"></dm-page-controls>` : ''}
			</dm-layout>
		`;
	}
}

customElements.define('dm-app', App);
