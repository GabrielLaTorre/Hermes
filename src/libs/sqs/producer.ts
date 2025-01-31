import sqs from "./sqsClient";
import dotenv from "dotenv";

dotenv.config();

const INCOMING_MESSAGE_QUEUE_URL = process.env.INCOMING_MESSAGE_QUEUE_URL!;

export const sendMessage = async (message: object) => {
  try {
    const params = {
      QueueUrl: INCOMING_MESSAGE_QUEUE_URL,
      MessageBody: JSON.stringify(message),
    };

    const result = await sqs.sendMessage(params).promise();
    console.log("Message sent to queue", result.MessageId);
    return result;
  } catch (error) {
    console.error("Error sending message to queue", error);
    throw error;
  }
};
