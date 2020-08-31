export const OfficerHTML = (officerObj) => {
    return `
        <section id="officer-${officerObj.id}" class="card-officer"> 
            <h2>Officer Name: ${officerObj.name}</h2>
        </section>
    `;  
}