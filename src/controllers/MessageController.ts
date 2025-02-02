import { Request, Response } from "express";
import { processIncomingMessage, sendIncomingMessage } from "../services/MessageService";


export const receiveMessage = async (req: Request, res: Response) => {
    try {
        const { message } = req.body;

        if (!message) {
            console.error("Message is required");
            res.status(400).json({ error: "Message is required" });
        }

        console.log(message)

        const messageProcessed = processIncomingMessage(message);

        const response = await sendIncomingMessage(messageProcessed);

        res.status(200).json({ message: "Message sent to queue", messageId: response.MessageId });
        
        console.log("Inconming message sent to queue", response.MessageId);
    } catch (error) {
        console.error("Error when processing incoming message", error);
        
        res.status(500).json({ error: "Error processing incoming message" });
    }
};
