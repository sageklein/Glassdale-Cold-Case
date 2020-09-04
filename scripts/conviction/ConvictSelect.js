import { useConvictions, getConvictions } from "./ConvictionProvider.js";

const eventHub = document.querySelector(".container");

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", (event) => {
	// Only do this if the `crimeSelect` element was changed
	if (event.target.id === "crimeSelect") {
		// Create custom event. Provide an appropriate name.
		const theChosenCrime = new CustomEvent("crimeChosen", {
			detail: {
				crimeThatWasChosen: event.target.value,
			},
		});
		eventHub.dispatchEvent(theChosenCrime);
	}
});

const contentTarget = document.querySelector(".filters__crime");

export const ConvictionSelect = () => {
    getConvictions()
    .then(() => {
		const convictionArray = useConvictions();
		render(convictionArray);
	});
};

const render = (convictionsCollection) => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
    <option value="0">Please select a crime</option>
    ${convictionsCollection.map(crimeObj => {
        console.log("conviction", convictionsCollection);
				return `<option value="${crimeObj.id}">${crimeObj.name}</option>`;
			}).join("")}
        </select>
    `;
};