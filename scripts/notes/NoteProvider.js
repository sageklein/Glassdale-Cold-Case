export const saveNote = (noteObj) => {
	return fetch("http://localhost:8088/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(noteObj),
	}).then((result) => {
		console.log("result");
	});
};
