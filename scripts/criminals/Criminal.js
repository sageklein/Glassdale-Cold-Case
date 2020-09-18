import { AlibiDialog } from "./AlibiDialog.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (event) => {
	if (event.target.id.startsWith("associates--")) {
		const [prefix, criminalId] = event.target.id.split("--");

		const alibiEvent = new CustomEvent("associatesClicked", {
			detail: {
				chosenCriminal: criminalId,
			},
		});

		eventHub.dispatchEvent(alibiEvent);
	}
});

export const CriminalHTML = (criminalObj) => {
	return `
		<section id="criminal-${criminalObj.id}" class="card-criminal">
			<p><h2>Name: ${criminalObj.name}</h2></p>
			<p><h3>Age: ${criminalObj.age}</h3></p>
			<p><h3>Crime: ${criminalObj.conviction}</h3></p>
            <p><h3>Term start: ${new Date(
				criminalObj.incarceration.start
			).toLocaleDateString("en-US")}</p>
            <p>Term end: ${new Date(
				criminalObj.incarceration.end
			).toLocaleDateString("en-US")}</h3></p>
			<button id="associates--${criminalObj.id}">Alibis</button>
			${AlibiDialog(criminalObj.id)}
		</section>
	`;
};
