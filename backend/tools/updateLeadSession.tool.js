import { Session } from "../models/Session.js";

export const updateLeadSession = async ({
  sessionId,
  updates
}) => {

  const session = await Session.findOne({
    sessionId
  });

  if (!session) {
    throw new Error("Session not found");
  }

  session.state = {
    ...session.state,
    ...updates
  };

  await session.save();

  return session.state;
};