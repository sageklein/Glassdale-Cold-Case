import { NotesHTML } from "./Notes.js";
import { getNotes, useNotes } from "./NotesProvider.js";

export const NoteList = () => {
	getNotes().then(() => {
		const notesArray = useNotes();
		console.log("notesArray", notesArray);
		addNotesToDOM(notesArray);
	});
};

const addNotesToDOM = (noteArray) => {
	const domElement = document.querySelector(".notesContainer");

	let HTMLArray = noteArray.map((singleNote) => {
		return NotesHTML(singleNote);
	});
	console.log("HTMLArray", HTMLArray);

	domElement.innerHTML = HTMLArray.join("");
};
