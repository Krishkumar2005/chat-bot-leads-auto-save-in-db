import { ai }
    from "../config/gemini.js";

import {
    SYSTEM_PROMPT
}
    from "../prompts/systemPrompt.js";

export const getGeminiResponse =
    async (
        state,
        input
    ) => {

        const response =
            await ai.models.generateContent({

                model: "gemini-2.5-flash",

                contents: `
   Current State:

${JSON.stringify(state)}

Input:

${input}
   `,

                config: {

                    systemInstruction:
                        SYSTEM_PROMPT,

                    tools: [
                        {
                            functionDeclarations: [
                                {
                                    name:
                                        "checkDuplicateLead",

                                    description:
                                        "Check if lead already exists",

                                    parameters: {
                                        type: "OBJECT",
                                        properties: {
                                            phoneNumber: {
                                                type: "STRING"
                                            }
                                        }
                                    }
                                },

                                {
                                    name:
                                        "saveLead",

                                    description:
                                        "Save lead",

                                    parameters: {
                                        type: "OBJECT",
                                        properties: {
                                            phoneNumber: {
                                                type: "STRING"
                                            },
                                            loanAmount: {
                                                type: "NUMBER"
                                            },
                                            name: {
                                                type: "STRING"
                                            }
                                        }
                                    }
                                },
                                {
                                    name: "updateLeadSession",

                                    description:
                                        "Update lead session whenever user provides new information",

                                    parameters: {
                                        type: "OBJECT",

                                        properties: {
                                            sessionId: {
                                                type: "STRING"
                                            },

                                            updates: {
                                                type: "OBJECT"
                                            }
                                        },

                                        required: [
                                            "sessionId",
                                            "updates"
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            });

        return response;
    };