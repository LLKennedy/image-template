import { html, css, LitElement } from 'lit-element';

const parsedTemplateEventText = 'parsed-template';

export default class ImageTemplate extends LitElement {
  static get styles() {
    return css`
      :host {
      }
    `;
  }

  static get properties() {
    return {
      width: { type: Number },
      height: { type: Number },
      template: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.width = 0;
    this.height = 0;
    this.template = {};
    this._template = {};
  }

  render() {
    return (
      <canvas width="[[width]]" height="[[height]]" />
    )
    // console.log("props: ", innerCanvas.props);
    // return innerCanvas;
  }

  updated(changedProperties) {
    // if (Object.prototype.hasOwnProperty.call(changedProperties, 'template')) {
      // Do more processing before accepting new inner template.
      this._template = this.template;

      // Add discovered properties to this object in the event return.
      const parsedEvent = new Event(parsedTemplateEventText, {
        detail: {
          message: 'template parsed',
        },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(parsedEvent);
    // }
  }
}
