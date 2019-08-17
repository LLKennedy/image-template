const tagName = 'image-template';
const template = document.createElement('template'); // Use built-in template tag
template.innerHTML = `<img id="image"/>`;

class ImageTemplate extends HTMLElement {
    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }
}

const register = () => customElements.define(tagName, ImageTemplate); // Register the name of the component with the browser
window.WebComponents ? window.WebComponents.waitFor(register) : register(); // Not 100%, assuming this waits for the browser to load support for web components
