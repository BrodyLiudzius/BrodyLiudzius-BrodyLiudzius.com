class HelloWorld extends HTMLElement {
	// set default value for `name` attribute
	constructor() {
		super();
		this.name = "World";
	}

	// returns an array of attributes that the hello-world component is observing
	// the response to a change in an observed attribute is defines in the attributeChangedCallback function
	static get observedAttributes() {
		return ["name"];
	}

	// Called when the `name` attribute that is under observation is changed
	attributeChangedCallback(property, oldValue, newValue) {
		if (oldValue === newValue) return;
			this[ property ] = newValue;
	}

	// the connectedCallback function is invoked when the element gets added to a document
	connectedCallback() {
		this.textContent = "Hello ${this.name}!";
	}
 }
 
 // register the component
 customElements.define("hello-world", HelloWorld );

 // There are six methods that the browser calls throughout the lifecycle of the web component:

 // constructor()
 // called when the component is first initialized. Must call super() and is also where
 // default values are set and other setup code

 // static observedAttributes()
 // returns an array of attributes that the browser will observe

 // attributeChangedCallback(propertyName, oldValue, newValue)
 // Called when an observed attribute is changed

 // connectedCallback()
 // called when the web component gets appended to a DOM

 // disconnectedCallback()
 // called when the web component gets removed from a DOM

 // adoptedCallback()
 // called when the web component is moved from one document to another