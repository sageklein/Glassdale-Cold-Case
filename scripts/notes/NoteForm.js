import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { saveNote } from "./NoteProvider.js";
/*
	A bunch of input boxes related to the note information
*/
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector("#noteFormContainer");

eventHub.addEventListener("click", clickEvent => {
	if (clickEvent.target.id === "saveNote") {
		const noteContent = document.querySelector("#noteForm--text");
		const noteCriminal = document.querySelector("#noteForm--criminal");

		if (noteCriminal.value !== "0") {
			const newNote = {
				noteText: noteContent.value,
				suspect: noteCriminal.value,
				date: Date.now(),
			};
			saveNote(newNote).then(() => {
				const criminalsArray = useCriminals();
				criminalsArray.sort(compare);
				render(criminalsArray);
			});
		} else {
			window.alert("Choose a Suspect");
		}
	}
});

const render = (criminalArray) => {
	contentTarget.innerHTML = `
		<textarea id="noteForm--text" placeholder="Add Note"></textarea>
		<select class="dropdown" id="noteForm--criminal">
			<option value="0">Please select a criminal...</option>
			${criminalArray.map((criminalObject) => {
					return `<option value="${criminalObject.name}">${criminalObject.name}</option>`;
				})
				.join("")}
		</select>
        <button id="saveNote">Save</button>
    `;
};

export const NoteForm = () => {
	getCriminals().then(() => {
		const criminalsArray = useCriminals();
		criminalsArray.sort(compare);
		render(criminalsArray);
	});
};

const compare = (a, b) => {
	// Use toUpperCase() to ignore character casing
	const crimeA = a.name.toUpperCase();
	const crimeB = b.name.toUpperCase();

	let comparison = 0;
	if (crimeA > crimeB) {
		comparison = 1;
	} else if (crimeA < crimeB) {
		comparison = -1;
	}
	return comparison;
};