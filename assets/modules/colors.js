export default function getInheritedBackgroundColor(elem) {
	let defaultBackground = getDefaultBackground();
	let backgroundColor = window.getComputedStyle(elem).backgroundColor;
	while (backgroundColor == defaultBackground) {
		if (!elem.parentElement)
			return backgroundColor;
		elem = elem.parentElement;
		backgroundColor = window.getComputedStyle(elem).backgroundColor;
	}
	return backgroundColor;
}

export function getDefaultBackground() {
	let div = document.createElement("div");
	document.head.appendChild(div);
	let backgroundColor = window.getComputedStyle(div).backgroundColor;
	document.head.removeChild(div);
	return backgroundColor;
}