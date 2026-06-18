import {Lead} from "../models/lead.js";

export const checkDuplicateLead =
    async ({ phoneNumber }) => {

        try {
            const lead =
                await Lead.findOne({
                    phoneNumber
                });

            return {
                exists: !!lead
            };
        } catch (error) {
            console.log("Err in calling checkDuplicateLead tool ", error)
            throw new Error(error)
        }
    };