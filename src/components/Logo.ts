import { LitElement, css, html } from 'lit';

class Logo extends LitElement {
	static styles = css`
    :host {
      --gap-logo-text: 130%;
      --text-font-size: 42px;
      --text-color: #ffffff;
      --scale-multiplier: 1.2;
      --animation-time: 0.1s;
    }

    .logo-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      gap: var(--gap-logo-text);
      position: relative;
      font-size: var(--text-font-size);
      color: var(--text-color);

      &::before {
        content: 'DANIEL';
        position: absolute;
        right: var(--gap-logo-text);
      }

      &::after {
        content: 'MEISLER';
        position: absolute;
        left: var(--gap-logo-text);
      }
    }

    .logo-text {
      font-size: var(--text-font-size);
    }

    .logo-image {
      height: 100%;
      width: 100%;
      cursor: pointer;
      transform: scale(1);
      transition: transform var(--animation-time) ease-in-out;

      &:hover {
        transform: scale(var(--scale-multiplier));
      }
    }
  `;

	render() {
		return html`
      <div class="logo-container">
        <img class="logo-image" src="./assets/app/logo.svg">
      </div>
    `;
	}
}

customElements.define('dm-logo', Logo);
