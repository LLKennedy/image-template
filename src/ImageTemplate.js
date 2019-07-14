import { html, css, LitElement } from 'lit-element';

const parsedTemplateEventText = 'parsed-template';

export default class ImageTemplate extends LitElement {
  static get styles() {
    return css`
      :host {
        background: grey;
        display: block;
        padding: 25px;
      }
    `;
  }

  static get properties() {
    return {
      width: { type: Number },
      height: { type: Number },
      template: {
        type: Object,
        // converter: {
        //   fromAttribute: value => {
        //     const parsedTemplate = JSON.parse(value);
        //     if (parsedTemplate === null || parsedTemplate === undefined) {
        //       return {};
        //     }
        //     if (
        //       typeof parsedTemplate !== 'object' ||
        //       parsedTemplate.constructor === [].constructor
        //     ) {
        //       return {};
        //     }
        //     return parsedTemplate;
        //   },
        //   toAttribute: value => {
        //     const stringifiedTemplate = JSON.stringify(value);
        //     return stringifiedTemplate;
        //   },
        // },
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
    return html`
      <canvas width="[[width]]" height="[[height]]" />
    `;
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
