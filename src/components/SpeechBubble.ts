import { LitElement, css, html } from 'lit';

class SpeechBubble extends LitElement {
	static styles = css`
    :host {
      --panel-padding: 5%;
      --border-size: 3px;
      --border-color: #ffffff;
      --speech-bubble-color: var(--read-color);
      --text-color: var(--background-color);
    }

    .container {
      height: 100%;
      width: 100%;
      background-color: var(--speech-bubble-color);
      padding: var(--panel-padding);
      box-sizing: border-box;
      position: relative;
      color: var(--text-color);

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-left-color: var(--speech-bubble-color);
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
