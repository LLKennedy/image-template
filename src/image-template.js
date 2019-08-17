const tagName = 'image-template';
const template = document.createElement('template'); // Use built-in template tag
template.innerHTML = `<img id="image"/>`;
const isIntersecting = ({isIntersecting}) => isIntersecting;

class ImageTemplate extends HTMLElement {
    /**
     * Defines the attributes which this element responds to.
     */
    static get observedAttributres() {
        return ['width', 'height'];
    }

    // Getter/setter methods

    /**
     * Sets attributes in a loop-safe manner
     * @param {String} name Attribute name
     * @param {any} value
     * @protected
     */
    safeSetAttribute(name, value) {
        if (this.getAttribute(name) !== value) this.setAttribute(name, value);
    }

    /**
     * Image width
     * @type {Number}
     */
    set width(value) {
        this.safeSetAttribute('width', value);
        // Class property is set, now pass it through to the shadow dom
        if (this.shadowImage) this.shadowImage.src = this.kittenURLFromDimensions(this.getAttribute('width'), this.getAttribute('height'));
    }

    /**
     * Image height
     * @type {Number}
     */
    set height(value) {
        this.safeSetAttribute('height', value);
        // Class property is set, now pass it through to the shadow dom
        if (this.shadowImage) this.shadowImage.src = this.kittenURLFromDimensions(this.getAttribute('width'), this.getAttribute('height'));
    }

    get width() {
        return this.getAttribute('width');
    }

    get height() {
        return this.getAttribute('height');
    }

    /**
     * Sets whether the element is on-screen
     * @type {Boolean}
     */
    set intersecting(value) {
        if (value) {
            this.shadowImage.src = this.kittenURLFromDimensions(this.getAttribute('width'), this.getAttribute('height'));
            this.setAttribute('intersecting', '');
            this.disconnectObserver();
        } else {
            this.removeAttribute('intersecting');
        }
    }

    get intersecting() {
        return this.hasAttribute('intersecting');
    }

    // Lifecycle callbacks

    /**
     * Runs any construction operations which do not require any DOM access, such as setting default internal property values
     */
    constructor() {
        super();
        // Bind the observerCallback so it can access the element with 'this'.
        this.observerCallback = this.observerCallback.bind(this);
        this.width = 400;
        this.height = 300;
    }

    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.shadowImage = this.shadowRoot.getElementById('image');
        }
        this.shadowImage.src = this.kittenURLFromDimensions(this.getAttribute('width'), this.getAttribute('height'));
        
        // Do lazy loading if possible
        if ('IntersectionObserver' in window) {
            this.initIntersectionObserver();
        } else {
            this.intersecting = true;
        }
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.safeSetAttribute(name, newVal);
    }

    disconnectedCallback() {
        /* do cleanup stuff here */
        this.disconnectObserver();
    }

    adoptedCallback() {
        // This is basically a stub for future HTML modules functionality
    }

    // Lazyload
    
    /**
     * Sets the 'intersecting' property when the element is on-screen.
     * @param {[IntersectionObserverEntry]} entries 
     * @protected
     */
    observerCallback(entries) {
        if (entries.some(isIntersecting)) this.intersecting = true;
    }

    /**
     * Initializes the IntersectionObserver when the element instantiates
     * @protected
     */
    initIntersectionObserver() {
        if (this.observer) return;
        // Start loading the image 10px before it appears on screen
        const rootMargin = `10px`;
        this.observer = new IntersectionObserver(this.observerCallback, { rootMargin });
        this.observer.observe(this);
    }

    /**
     * Disconnects and unloads the IntersectionObserver
     * @protected
     */
    disconnectObserver() {
        this.observer.disconnect();
        this.observer = null;
        delete this.observer;
    }

    // Utility functions

    /**
     * Construct a kitten URL from a width and height
     * @param {Number} width Width of the kitten image
     * @param {Number} height Height of the kitten image
     * @return {String} The constructed URL
     */
    kittenURLFromDimensions(width, height) {
        return "https://placekitten.com/" + width + "/" + height; // FIXME: string concat
    }
}

const register = () => customElements.define(tagName, ImageTemplate); // Register the name of the component with the browser
window.WebComponents ? window.WebComponents.waitFor(register) : register(); // Not 100%, assuming this waits for the browser to load support for web components
