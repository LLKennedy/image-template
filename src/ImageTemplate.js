import { html, css, LitElement } from 'lit-element';

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
				converter: {
					fromAttribute: (value, _) => {
						let parsedTemplate = JSON.parse(value);
						if (parsedTemplate === null || parsedTemplate === undefined) {
							return {};
						}
						if (typeof parsedTemplate !== "object" || parsedTemplate.constructor === [].constructor) {
							return {};
						}
						return parsedTemplate;
					},
					toAttribute: (value, _) => {
						let stringifiedTemplate = JSON.stringify(value);
						return stringifiedTemplate;
					}
				}
			},
		};
	}

	constructor() {
		super();
		this.width = 0;
		this.height = 0;
		this.template = {};
	}

	render() {
		return html`
			<canvas width=[[width]] height=[[height]]/>
		`;
	}

	updated(changedProperties) { 
		if (changedProperties.hasOwnProperty("template")) {
			
		}
	}
}
