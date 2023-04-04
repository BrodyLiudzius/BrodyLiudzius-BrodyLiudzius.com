import getInheritedBackgroundColor from "/assets/modules/colors.js"
import createSVG from  "/assets/modules/svg.js"
import {createCircleSVG, createTextSVG} from "/assets/modules/svg.js";

// #toDo: see if import can work with http addresses

class metroIconCircle extends HTMLElement {
	constructor () {
		super();
	}
	connectedCallback() {
		let color = getComputedStyle(this).getPropertyValue("color");
		let backgroundColor = getInheritedBackgroundColor(this);

		let svg = createSVG("1", "1");

		let circle = createCircleSVG("50%", "50%", "50%");
		circle.setAttribute("fill", `${color}`);
		svg.append(circle);
		
		let text = createTextSVG("50%", "75%", "75%", this.innerHTML);
		text.setAttribute("fill", `${backgroundColor}`);
		text.setAttribute("text-anchor", "middle");
		svg.append(text);

		this.innerHTML = "";

		svg.style.height = "1.2em";
		svg.style.width = "1.2em";
		svg.style.verticalAlign = "text-top";

		this.append(svg);
	}
}

customElements.define("metro-icon-circle", metroIconCircle);