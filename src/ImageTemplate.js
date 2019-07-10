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
			template: { type: Object },
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
