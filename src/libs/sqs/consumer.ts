import sqs from "./sqsClient";
import dotenv from "dotenv";

dotenv.config();

const OUTGOING_MESSAGE_QUEUE_URL = process.env.OUTGOING_MESSAGE_QUEUE_URL!;

const processMessage = async (message: AWS.SQS.Message) => {
  try {
    console.log("Message received", message.Body);

    console.log("Processing message...");

  } catch (error) {
    console.error("Error processing message", error);
  }
};

export const receiveMessages = async () => {
  console.log("Listening for messages...");

  while (true) {
    try {
      const params = {
        QueueUrl: OUTGOING_MESSAGE_QUEUE_URL,
        MaxNumberOfMessages: 1,
        WaitTimeSeconds: 10,
      };

      const data = await sqs.receiveMessage(params).promise();

      if (data.Messages && data.Messages.length > 0) {
        for (const message of data.Messages) {
          await processMessage(message);
        }
      }
    } catch (error) {
      console.error("Error listening message... ", error);
    }
  }
};
