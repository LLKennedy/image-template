import { html, render } from 'lit-html';
import '../src/image-template.js';

const width = 800;
const height = 600;
const template = {};
render(
	html`
		<image-template .width=${width} .height=${height} .template=${template}/>
	`,
	document.querySelector('#demo'),
);
