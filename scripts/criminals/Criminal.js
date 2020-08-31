export const CriminalHTML = (criminalObj) => {
	return `
        <section id="criminal-${criminalObj.id}" class="card-criminal"> 
            <h2>Criminal Name: ${criminalObj.name}</h2>
            <h1>Age: ${criminalObj.age}</h1>
            <h1>Crime: ${criminalObj.conviction}</h1>            
            <h1>Term Start: ${new Date(
				criminalObj.incarceration.start
			).toLocaleDateString("en-US")}</h1>
            <h1>Term End: ${new Date(
				criminalObj.incarceration.end
			).toLocaleDateString("en-US")}</h1>
        </section>
    `;
};
