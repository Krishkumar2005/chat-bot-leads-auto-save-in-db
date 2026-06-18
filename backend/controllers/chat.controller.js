import { processMessage } from "../services/chat.service.js";

export const chatController = async (
  req,
  res
) => {
  try {
    const {
      sessionId,
      message,
    } = req.body;

    const result =
      await processMessage(
        sessionId,
        message
      );

    res.status(200).json(result);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};