import { msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { allLocales } from '../../localization/locale-codes.js';
import { getUserLanguage, setUserLanguage } from '../../services/localization.js';
import { allThemes, setUserTheming } from '../../services/theming.js';

class Settings extends LitElement {
	static styles = css`
    :host {
      
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .settings-container {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    select {
      background: #222222;
      font-family: Geo;
      font-size: 28px;
      color: white;
      border: solid 1px white;
      padding: 5px;
      cursor: pointer;
    }
  `;

	@state() currentTheme = allThemes[0];
	@state() currentLocale = getUserLanguage();

	localeNames: {
		[L in (typeof allLocales)[number]]: string;
	} = {
		'en-US': 'English',
		'de-DE': 'Deutsch',
	};

	handleTheming(event: CustomEvent) {
		const clickedTheme = (event.currentTarget as HTMLElement).dataset.theme;

		if (clickedTheme && allThemes.includes(clickedTheme)) {
			setUserTheming(clickedTheme);
			this.currentTheme = clickedTheme;
			this.checkActiveTheme();
		}
	}

	checkActiveTheme() {
		const themeButtons = this.shadowRoot?.querySelectorAll('.theme-button');

		if (!themeButtons) {
			return;
		}

		for (const button of Array.from(themeButtons)) {
			const theme = button.getAttribute('data-theme');
			const icon = button.querySelector('.theme-selected-container');

			if (!icon) {
				return;
			}

			if (theme === this.currentTheme) {
				icon.classList.add('active');
			} else {
				icon.classList.remove('active');
			}
		}
	}

	async handleLanguage(event: CustomEvent) {
		const newIndex = event.detail.value;
		const newLocale = allLocales[newIndex];

		if (newLocale !== this.currentLocale) {
			this.currentLocale = newLocale;
			await setUserLanguage(this.currentLocale);
		}
	}

	render() {
		return html`
      <dm-headline>${msg('SETTINGS')}:</dm-headline>

      <div class="content">
        <div class="settings-container">
          <label for="theme">${msg('Appearance')}</label>

          <select name="theme" id="theme">
            <option @click="${this.handleTheming}" value="dark">${msg('Dark')}</option>
            <option @click="${this.handleTheming}" value="light">${msg('Light')}</option>
          </select>
        </div>

        <div class="settings-container">
          <label for="language">${msg('Language')}</label>

          <select name="language" id="language">
            ${allLocales.toReversed().map(
							(locale, index) =>
								html`
                <option @click="${this.handleLanguage}" value="${allLocales[index]}">${this.localeNames[locale]}</option>
              `,
						)}
            <!-- <option @click="${this.handleLanguage}" value="en">${msg('English')}</option>
            <option @click="${this.handleLanguage}" value="de">${msg('German')}</option> -->
          </select>
        </div>

      </div>
    `;
	}
}

customElements.define('dm-settings', Settings);
