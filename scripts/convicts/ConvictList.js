import { ConvictHTML } from "./Convict.js";
import { getConvicts, useConvicts } from "./ConvictProvider.js";

export const ConvictList = () => {
	getConvicts().then(() => {
		const convictArray = useConvicts();
		addConvictsToDOM(convictArray);
	});
};

const addConvictsToDOM = (anConvictArray) => {
	const domElement = document.querySelector(".convictsContainer");

	let HTMLArray = anConvictArray.map((singleConvict) => {
		return ConvictHTML(singleConvict);
	});
	domElement.innerHTML = HTMLArray.join("");
};
