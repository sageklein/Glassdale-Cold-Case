import { useConvictions, getConvictions } from "./ConvictionProvider.js";

const contentTarget = document.querySelector(".filters__crime");

export const ConvictionSelect = () => {
    getConvictions()
    .then(() => {
	const convictions = useConvictions();
	render(convictions);
})};

const eventHub = document.querySelector(".container");

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {
	// Only do this if the `crimeSelect` element was changed
	if (event.target.id === "crimeSelect") {
		// Create custom event. Provide an appropriate name.
		const theChosenCrime = new CustomEvent("crimeChosen", {
			detail: {
				crimeThatWasChosen: event.target.value,
			},
		});

		// Dispatch to event hub
		eventHub.dispatchEvent(theChosenCrime);
	}
});

const render = (convictionsCollection) => {
	contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime</option>
            ${convictionsCollection.map((crimeObj) => {
				return `
                        <option value="${crimeObj.conviction}">${crimeObj.conviction}</option>
                    `;
			})}
        </select>
    `;
};
