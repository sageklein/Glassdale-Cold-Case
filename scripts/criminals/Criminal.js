export const CriminalHTML = (criminalObj) => {
	return `
        <section id="criminal-${criminalObj.id}" class="card-criminal"> 
            <h2>Name: ${criminalObj.name}</h2>
        </section>
    `;
};
