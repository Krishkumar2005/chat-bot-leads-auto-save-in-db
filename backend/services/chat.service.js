// Load Session
//       ↓
// Send State + Message To Gemini
//       ↓
// Gemini Reply ?
//       ↓
// Text Response
//       ↓
// Return To User

// OR

// Function Call
//       ↓
// Execute Tool
//       ↓
// Send Tool Result Back To Gemini
//       ↓
// Gemini Final Reply
//       ↓
// Return To User


import { Session } from "../models/session.js";
import { executeTool }
  from "./toolExecutor.service.js";

import {
  getGeminiResponse
}
  from "./gemini.service.js";

export const processMessage =
  async (
    sessionId,
    message
  ) => {

    
    let session =
      await Session.findOne({
        sessionId
      });

    if (!session) {

      session =
        await Session.create({

          sessionId,

          state: {
            phoneNumber: null,
            loanAmount: null,
            name: null,
            nameAsked: false,
            nameSkipped: false,
            leadSaved: false
          }
        });
    }

    let response =
      await getGeminiResponse(
        session.state,
        message
      );

    while (true) {

      const candidate =
        response.candidates?.[0];

      const parts =
        candidate?.content?.parts || [];

      const functionCall =
        parts.find(
          p => p.functionCall
        )?.functionCall;

      if (!functionCall) {

        const text =
          parts
            .map(
              p => p.text || ""
            )
            .join("");

        return {
          reply: text
        };
      }

      const args = {
        ...functionCall.args,
        sessionId
      };

      const toolResult =
        await executeTool(
          functionCall.name,
          args
        );

      session =
        await Session.findOne({
          sessionId
        });

      response =
        await getGeminiResponse(
          session.state,
          `
User Message:
${message}

Tool Result:
${JSON.stringify(toolResult)}
`
        );
    }
  };