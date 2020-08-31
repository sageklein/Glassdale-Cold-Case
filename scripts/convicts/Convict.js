export const ConvictHTML = (convictObj) => {
	return `
        <section id="convict-${convictObj.id}" class="card-convict"> 
            <h2>Name: ${convictObj.name}</h2>
        </section>
    `;
};
