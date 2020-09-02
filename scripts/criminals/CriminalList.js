import { CriminalHTML } from "./Criminal.js";
import { getCriminals, useCriminals } from "./CriminalProvider.js";

const eventHub = document.querySelector(".container");

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
	// You remembered to add the id of the crime to the event detail, right?
	if (event.detail.crimeThatWasChosen !== "0") {
		/*
            Filter the criminals application state down to the people that committed the crime
        */
		const matchingCriminals = useCriminals().filter(currentCriminal => {
			return currentCriminal.conviction === event.detail.crimeThatWasChosen
		});
		/*
            Then invoke render() and pass the filtered collection as
            an argument
        */
		render(matchingCriminals);
	} else render(useCriminals());
});

// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
    .then(() => {
		const appStateCriminals = useCriminals();
		render(appStateCriminals);
	});
};


const render = criminalArray => {
	const domElement = document.querySelector(".criminalsContainer");

	let HTMLArray = criminalArray.map((singleCriminal) => {
		return CriminalHTML(singleCriminal);
	});

	domElement.innerHTML = HTMLArray.join("");
};


