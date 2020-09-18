export const WitnessHTML = (witnessObj) => {
	return `
        <section id="witness-${witnessObj.id}" class="witness-card">
            <p><h3>${witnessObj.name}</h3></p>
            <p>${witnessObj.statements}</p>
        </section>
    `;
};
