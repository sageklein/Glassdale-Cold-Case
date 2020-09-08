export const NoteHTML = (noteObject) => {
	return `
        <section id="note-${noteObject.id}" class="note-card">
            <div class="note--title"><h2>Criminal:<p> ${noteObject.suspect}</2></div>
            <div class="note--content"><h3>Notes: ${noteObject.noteText}</h3></div>
            <div class="note--timestamp"><h3>Timestamp: ${new Date(
				noteObject.date
			).toLocaleDateString("en-US")}</h3></div>
        </section>
    `;
};
