import { OfficerHTML } from "./Officer.js"
import { getOfficers, useOfficers } from "./OfficerProvider.js"

export const OfficerList = () => {
    getOfficers()
    .then(()=> {
        const officerArray = useOfficers()
        console.log("Officer Array", officerArray)
        addOfficersToDOM(officerArray);
    })
}

const addOfficersToDOM = (anOfficerArray) => {
 const domElement = document.querySelector(".officersContainer"); 
 
 let HTMLArray = anOfficerArray.map(singleOfficer => {
     return OfficerHTML(singleOfficer);
 })
    domElement.innerHTML = HTMLArray.join("");
}