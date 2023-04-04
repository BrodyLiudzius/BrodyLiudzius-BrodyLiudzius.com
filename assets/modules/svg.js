const svgns = "http://www.w3.org/2000/svg";

export default function createSVG(height, width) {
	let svg = document.createElementNS(svgns, "svg");
	svg.setAttribute("xmlns", svgns);
	svg.setAttribute("viewbox", `0 0 ${width} ${height}`);
	return svg;
}

export function createCircleSVG(x, y, radius) {
	let circle = document.createElementNS(svgns, "circle");
	circle.setAttribute("cx", x);
	circle.setAttribute("cy", y);
	circle.setAttribute("r", radius);
	return circle;
}

export function createTextSVG(x, y, fontSize, value) {
	let text = document.createElementNS(svgns, "text");
	text.setAttribute("x", x);
	text.setAttribute("y", y);
	text.setAttribute("font-size", fontSize);
	text.innerHTML = value;
	return text;
}