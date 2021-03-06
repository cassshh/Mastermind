import html from './html.mjs';

/**
 * Template literal
 */
const tmpl = document.createElement('template');
tmpl.innerHTML = html`
  <style>
    :host {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      width: 100%;
      flex: 1;
      max-height: 100%;
      background: var(--accent-color, #ed1a59);
      color: var(--primary-color, #212121);
      font-size: 2.75em;
      align-items: center;
      justify-content: center;
      border-radius: 0 0 15px 15px;
      transition: max-height 1s ease, font-size .7s ease-in-out .3s;
    }
  </style>
  <slot></slot>
`;
/**
 * Toolbar component
 */
export default class MmToolbar extends HTMLElement {
  constructor() {
    super();
    if (typeof ShadyCSS !== 'undefined') {
      // eslint-disable-next-line no-undef
      ShadyCSS.prepareTemplate(tmpl, 'mm-toolbar');
      // eslint-disable-next-line no-undef
      ShadyCSS.styleElement(this);
    }
    // Attach a shadow root to the element.
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
}
/**
 * Define custom element
 */
window.customElements.define('mm-toolbar', MmToolbar);
