export const NoteHTML = (noteObject) => {
	return `
        <section id="note-${noteObject.id}" class="note-card">
            <div class="note--title">Criminal: ${noteObject.suspect}</div>
            <div class="note--content">${noteObject.noteText}</div>
            <div class="note--timestamp">Timestamp: ${new Date(
				noteObject.date
			).toLocaleDateString("en-US")}</div>
        </section>
    `;
};
