export const NoteHTML = (noteObj) => {
	return `
        <section id="note-${noteObj.id}" class="card-note"> 
            <h2>Note: ${noteObj.name}</h2>
        </section>
    `;
};
