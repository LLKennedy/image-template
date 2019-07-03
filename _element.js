import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `image-template`
 * A JS+HTML implementation of github.com/LLKennedy/imagetemplate
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ImageTemplate extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'image-template',
      },
    };
  }
}

window.customElements.define('image-template', ImageTemplate);
