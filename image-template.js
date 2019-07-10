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
      <canvas width="[[width]]" height="[[width]]"/>
    `;
  }
  static get properties() {
    return {
      width: {
        type: Number,
        value: 12,
      },
      
    };
  }
}

window.customElements.define('image-template', ImageTemplate);
