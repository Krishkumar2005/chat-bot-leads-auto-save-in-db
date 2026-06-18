import { checkDuplicateLead }
from "../tools/checkDuplicateLead.tool.js";

import { saveLead }
from "../tools/saveLead.tool.js";

import { updateLeadSession }
from "../tools/updateLeadSession.tool.js";

export const executeTool =
async (name,args)=>{

 switch(name){

  case "updateLeadSession":
   return await updateLeadSession(args);

  case "checkDuplicateLead":
   return await checkDuplicateLead(args);

  case "saveLead":
   return await saveLead(args);

  default:
   throw new Error(
    `Unknown Tool: ${name}`
   );
 }
};