console.log("All hooked up!")
import { OfficerList } from "./officers/OfficerList.js"
import { CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./conviction/ConvictSelect.js";
import { getConvictions } from "./conviction/ConvictionProvider.js";


OfficerList();
CriminalList();
getConvictions().then(() => { ConvictionSelect() });