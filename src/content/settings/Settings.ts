import { localized, msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { allLocales } from '../../localization/locale-codes.js';
import { getUserLanguage, setUserLanguage } from '../../services/localization.js';
import { allThemes, getUserTheming, setUserTheming } from '../../services/theming.js';

@localized()
class Settings extends LitElement {
	static styles = css`
    :host {
      --content-gap: 20px;

			--select-font-size: 28px;
			--select-menu-color: var(--read-color);
			--select-menu-background: var(--background-color);

			--select-border-color: var(--read-color);
			--select-border-width: 1px;
			--select-border-padding: 5px;
    }
    
    .settings-container {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: var(--content-gap);
    }

    select {
      background: var(--select-menu-background);
      font-family: var(--font);
      font-size: var(--select-font-size);
      color: var(--select-menu-color);
      border: solid var(--select-border-width) var(--select-border-color);
      padding: var(--select-border-padding);
      cursor: pointer;
    }
  `;

	@state() currentTheme = getUserTheming();
	@state() currentLocale = getUserLanguage();

	localeNames: {
		[L in (typeof allLocales)[number]]: string;
	} = {
		'en-US': 'English',
		'de-DE': 'Deutsch',
	};

	handleTheming(event: CustomEvent) {
		const select = event.target as HTMLSelectElement;
		const selectedTheme = select.value;
		if (allThemes.includes(selectedTheme)) {
			this.currentTheme = selectedTheme;
			setUserTheming(this.currentTheme);
		}
	}

	async handleLanguage(event: CustomEvent) {
		const select = event.target as HTMLSelectElement;
		const selectedLanguage = Number.parseInt(select.value);

		const newLocale = allLocales[selectedLanguage];
		if (newLocale !== this.currentLocale) {
			this.currentLocale = newLocale;
			await setUserLanguage(this.currentLocale);
		}
	}

	render() {
		return html`
      <dm-headline>${msg('SETTINGS')}:</dm-headline>

      <dm-content>
        <div class="settings-container">
          <label for="theme">${msg('Appearance')}</label>

          <select name="theme" @change="${this.handleTheming}">
            <option value="dark" ?selected="${this.currentTheme === 'dark'}">${msg('Dark')}</option>
            <option value="light" ?selected="${this.currentTheme === 'light'}">${msg('Light')}</option>
          </select>
        </div>

        <div class="settings-container">
          <label for="language">${msg('Language')}</label>

          <select name="language" @change="${this.handleLanguage}">
            ${allLocales.map(
							(locale, index) =>
								html`
                <option @click="${this.handleLanguage}" value="${index}" ?selected="${locale === this.currentLocale}">${this.localeNames[locale]}</option>
              `,
						)}
          </select>
        </div>

      </dm-content>
    `;
	}
}

customElements.define('dm-settings', Settings);
