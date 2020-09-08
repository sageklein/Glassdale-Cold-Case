export const OfficerHTML = (officerObj) => {
    return `
        <section id="officer-${officerObj.id}" class="card-officer"> 
            <h2>Officer: </h2><p>
            <h3>${officerObj.name}</h3>
        </section>
    `;  
}