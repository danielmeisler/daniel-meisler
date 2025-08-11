import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';

class CareerSection extends LitElement {
	static styles = css`
    :host {
      --date-font-size: 20px;
      --title-font-size: 30px;
      --sub-title-font-size: 30px;
      --content-font-size: 20px;

      --date-font-color: var(--read-tertiary-color);
      --title-font-color: var(--read-color);
      --sub-title-font-color: var(--read-color);
      --content-font-color: var(--read-secondary-color);
    }

    .container {
      display: flex;
      flex-direction: column;
    }

    .left {
      display: flex;
      align-items: start;
      text-align: start;
    }

    .right {
      display: flex;
      align-items: end;
      text-align: end;
    }

    .date {
      font-size: var(--date-font-size);
      color: var(--date-font-color);
    }

    .title {
      font-size: var(--title-font-size);
      color: var(--title-font-color);
      font-weight: 600;
    }

    .sub-title {
      font-size: var(--sub-title-font-size);
      color: var(--sub-title-font-color);
    }

    .content {
      font-size: var(--content-font-size);
      color: var(--content-font-color);
    }
  `;

	@property() mode: 'left' | 'right' = 'left';

	render() {
		return html`
      <div class="container ${this.mode}">
        <div class="date">
          <slot name="date"></slot>
        </div>
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="sub-title">
          <slot name="sub-title"></slot>
        </div>
        <slot class="content"></slot>
      </div>
    `;
	}
}

customElements.define('dm-career-section', CareerSection);
