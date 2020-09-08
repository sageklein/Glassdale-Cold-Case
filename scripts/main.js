console.log("All hooked up!")
import { OfficerList } from "./officers/OfficerList.js"
import { CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./conviction/ConvictSelect.js";
import { NoteForm } from "./notes/NoteForm.js";
import { NoteList } from "./notes/NoteList.js";
// import { makeWitnessBtn } from "./witnesses/WitnessList"


CriminalList();
ConvictionSelect();
OfficerList();
NoteForm();
NoteList();
// makeWitnessBtn();