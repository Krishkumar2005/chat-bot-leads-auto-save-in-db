import { Lead } from "../models/lead.js";
import { Session } from "../models/session.js";

export const saveLead =
    async ({
        sessionId,
        phoneNumber,
        loanAmount,
        name
    }) => {

        try {
            const lead =
                await Lead.create({
                    phoneNumber,
                    loanAmount,
                    name
                });

            await Session.updateOne(
                { sessionId },
                {
                    $set: {
                        "state.leadSaved": true
                    }
                }
            );

            return {
                success: true,
                leadId: lead._id
            };
        } catch (error) {
            console.log("Err in calling saveLead tool ", error)
            throw new Error(error)
        }
    };