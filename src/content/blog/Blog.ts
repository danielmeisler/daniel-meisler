import { localized, msg } from '@lit/localize';
import { LitElement, css, html } from 'lit';

@localized()
class Blog extends LitElement {
	static styles = css`
    :host {
      --svg-color: var(--read-color);
      --title-font-size: 180px;
      --description-font-size: 39px;

      --anim-time: 1s;
    }

    .container {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-transform: uppercase;
      overflow: hidden;
      white-space: nowrap;
      animation: typing var(--anim-time) steps(3);
      margin-top: -40px;

      .text-title {
        font-size: var(--title-font-size);
      }

      .text-description {
        font-size: var(--description-font-size);
      }
    }

    .background {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;

      .background-svg {
        width: 100%;
        height: 100%;
        fill: var(--svg-color);
      }
    }

    @keyframes typing {
      from { height: 0 }
    }

    @media screen and (max-width: 700px) {
      :host {
        --title-font-size: 120px;
        --description-font-size: 26px;
      }

      .container {
        height: 82vw;
      }

      .menu-container {
        padding: 50px 0;
      }
    }
  `;

	render() {
		return html`
      <div class="container">
          <div class="text">
            <div class="text-title">${msg('Blog')}</div>
            <div class="text-description">${msg('under construction')}</div>
          </div>
          <div class="background">
            <svg class="background-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600.16 599.89">
              <polygon class="cls-1" points="52.24 599.89 27.24 599.89 56.74 549.89 81.74 549.89 52.24 599.89"/>
              <polygon class="cls-1" points="106.74 599.89 81.74 599.89 111.24 549.89 136.24 549.89 106.74 599.89"/>
              <polygon class="cls-1" points="161.24 599.89 136.24 599.89 165.74 549.89 190.74 549.89 161.24 599.89"/>
              <polygon class="cls-1" points="215.74 599.89 190.74 599.89 220.24 549.89 245.24 549.89 215.74 599.89"/>
              <polygon class="cls-1" points="270.24 599.89 245.24 599.89 274.74 549.89 299.74 549.89 270.24 599.89"/>
              <polygon class="cls-1" points="324.99 599.89 299.99 599.89 329.49 549.89 354.49 549.89 324.99 599.89"/>
              <polygon class="cls-1" points="379.49 599.89 354.49 599.89 383.99 549.89 408.99 549.89 379.49 599.89"/>
              <polygon class="cls-1" points="543.24 599.89 518.24 599.89 547.74 549.89 572.74 549.89 543.24 599.89"/>
              <polygon class="cls-1" points="488.61 599.89 463.61 599.89 493.11 549.89 518.11 549.89 488.61 599.89"/>
              <polygon class="cls-1" points="434.05 599.89 409.05 599.89 438.55 549.89 463.55 549.89 434.05 599.89"/>
              <polygon class="cls-1" points="50.13 50 25.13 50 54.63 0 79.63 0 50.13 50"/>
              <polygon class="cls-1" points="104.63 50 79.63 50 109.13 0 134.13 0 104.63 50"/>
              <polygon class="cls-1" points="159.13 50 134.13 50 163.63 0 188.63 0 159.13 50"/>
              <polygon class="cls-1" points="213.63 50 188.63 50 218.13 0 243.13 0 213.63 50"/>
              <polygon class="cls-1" points="268.13 50 243.13 50 272.63 0 297.63 0 268.13 50"/>
              <polygon class="cls-1" points="322.88 50 297.88 50 327.38 0 352.38 0 322.88 50"/>
              <polygon class="cls-1" points="377.38 50 352.38 50 381.88 0 406.88 0 377.38 50"/>
              <polygon class="cls-1" points="541.13 50 516.13 50 545.63 0 570.63 0 541.13 50"/>
              <polygon class="cls-1" points="486.5 50 461.5 50 491 0 516 0 486.5 50"/>
              <polygon class="cls-1" points="431.94 50 406.94 50 436.44 0 461.44 0 431.94 50"/>
              <polygon class="cls-1" points="0 596.06 27.24 549.89 2.24 549.89 0 553.68 0 596.06"/>
              <polygon class="cls-1" points=".02 42.56 25.13 0 .13 0 .02 .19 .02 42.56"/>
              <polygon class="cls-1" points="600.02 553.66 572.74 599.89 597.74 599.89 600.02 596.03 600.02 553.66"/>
              <polygon class="cls-1" points="600.16 0 600.13 0 570.63 50 595.63 50 600.16 42.33 600.16 0"/>
            </svg>
          </div>
      </div>
    `;
	}
}

customElements.define('dm-blog', Blog);
