import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';

class Logo extends LitElement {
	static styles = css`
    :host {
      --logo-size: 100px;
      --gap-logo-text: 30px;
      --text-font-size: 42px;
      --text-color: var(--read-color);
      --logo-color: var(--read-color);
      --vertical-padding: 50px;
      --scale-multiplier: 1.2;
      --animation-time: 0.1s;
    }

    .logo-container {
      height: var(--logo-size);
      width: 100%;
      padding: var(--vertical-padding) 0;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      position: relative;
      font-size: var(--text-font-size);
      color: var(--text-color);
      gap: var(--gap-logo-text);
    }

    .surname {
      justify-self: end;
    };

    .lastname {
      justify-self: start;
    }

    .logo-text {
      font-size: var(--text-font-size);
    }

    .logo-image {
      height: var(--logo-size);
      width: var(--logo-size);
      cursor: pointer;
      grid-column: 2;
      transform: scale(1);
      transition: transform var(--animation-time) ease-in-out;

      &:hover {
        transform: scale(var(--scale-multiplier));
      }
    }

    .icon {
      height: 100%;
      width: 100%;
      fill: var(--logo-color);
    }

    @media screen and (max-width: 700px) {
      :host {
        --logo-size: 80px;
        --text-font-size: 24px;
      }
    }
  `;

	@state() isParty = false;

	handleClick() {
		this.isParty = !this.isParty;
	}

	render() {
		return html`
      <div class="logo-container">
        <div class="surname">DANIEL</div>
        <div class="logo-image" @click="${this.handleClick}">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path class="cls-1" d="M95,0h0s-44.99,45-44.99,45h-.02L5,0h0s-5,0-5,0v50h0v25.33h0C0,88.95,22.39,100,50,100s50-11.05,50-24.67h0V0h-5ZM5,7.08l37.92,37.92H5V7.08ZM95,75.33h0c-.07,10.53-20.18,19.06-44.99,19.06S5.07,85.86,5.01,75.33h0v-25.33h90v25.33ZM57.08,45L95,7.08v37.92h-37.92Z"/>
          </svg>
        </div>
        <div class="lastname">MEISLER</div>
      </div>
      ${this.isParty ? html`<dm-party></dm-party>` : ''}
    `;
	}
}

customElements.define('dm-logo', Logo);
