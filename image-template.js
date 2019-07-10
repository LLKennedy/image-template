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
      <canvas width="{{width}}" height="{{height}}"/>
    `;
  }
  static get properties() {
    return {
      width: {
        type: Number,
        value: 0,
      },
      height: {
        type: Number,
        value: 0,
      },
    };
  }
}

window.customElements.define('image-template', ImageTemplate);
