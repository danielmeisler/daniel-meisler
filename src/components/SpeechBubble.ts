import { LitElement, css, html } from 'lit';

class SpeechBubble extends LitElement {
	static styles = css`
    :host {
      --panel-padding: 5%;
      --border-size: 3px;
      --background-color: var(--read-color);
    }

    .container {
      height: 100%;
      width: 100%;
      background-color: var(--background-color);
      padding: var(--panel-padding);
      box-sizing: border-box;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-left-color: var(--background-color);
        border-right: 0;
        margin-top: -20px;
        margin-right: -20px;
      }
    }
  `;

	render() {
		return html`
      <div class="container">
        <slot></slot>
      </div>
    `;
	}
}

customElements.define('dm-speech-bubble', SpeechBubble);
