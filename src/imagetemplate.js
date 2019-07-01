import { LitElement, html, customElement, property } from 'lit-element';

@customElement('image-template')
class ImageTemplate extends LitElement {
	/**
	 * Width is the width of the canvas
	 */
	@property()
	width = 'width';
	
	/**
	 * Height is the height of the canvas
	 */
	@property()
	height = 'height';

	/**
	 * Render defines the HTML template
	 */
	render(){
		console.log(this.width, this.height)
		return html`
		<p> width=${this.width} height=${this.height}</p>
		`;
	}
}

// Register with the browser
customElements.define('image-template', ImageTemplate);