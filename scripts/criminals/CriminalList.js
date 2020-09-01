import { CriminalHTML } from "./Criminal.js";
import { getCriminals, useCriminals } from "./CriminalProvider.js";

export const CriminalList = () => {
	getCriminals().then(() => {
        const criminalArray = useCriminals();
		addCriminalsToDOM(criminalArray);
	});
};

const addCriminalsToDOM = (criminalArray) => {
	const domElement = document.querySelector(".criminalsContainer");
	let HTMLArray = criminalArray.map((singleCriminal) => {
		return CriminalHTML(singleCriminal);
	});
	domElement.innerHTML = HTMLArray.join("");
};
