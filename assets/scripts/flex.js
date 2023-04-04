// This script takes the place of the attr() css function
// that currently is not supported for data attributes

window.addEventListener("load", (event) => {
	const flexItems = document.getElementsByClassName("flex");
	const flexGrows = document.getElementsByClassName("flexGrow");
	const flexShrinks = document.getElementsByClassName("flexShrink");

	if (flexItems.length != 0)
		for (let iFlex in flexItems) {
			let flexItem = flexItems[iFlex];
			if (flexItem.hasAttribute("data-flex"))
				flexItem.style.flex = flexItem.getAttribute("data-flex");
		}
	if (flexGrows.length != 0)
		for (let iFlexGrow in flexGrows) {
			let flexGrow = flexGrows[iFlexGrow];
			if (flexGrow.hasAttribute("data-flex-grow"))
				flexGrow.style.flexGrow = flexGrow.getAttribute("data-flex-grow");
		}
	if (flexShrinks.length != 0)
		for (let iFlexShrink in flexShrinks) {
			let flexShrink = flexShrinks[iFlexShrink];
			if (flexShrink.hasAttribute("data-flex-shrink"))
				flexShrink.style.flexShrink = flexShrink.getAttribute("data-flex-shrink");
		}

 });