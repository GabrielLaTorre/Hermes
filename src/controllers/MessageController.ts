import { Request, Response } from "express";
import { sendMessage } from "../libs/sqs/producer";


export const receiveMessage = async (req: Request, res: Response) => {
    try {
        const { message } = req.body;

        if (!message) {
            console.error("Message is required");
            res.status(400).json({ error: "Message is required" });
        }

        console.log('Message received', message)

        const response = await sendMessage({ message });

        console.log("Inconming message sent to queue", response.MessageId);
    } catch (error) {
        console.error("Error when processing incoming message", error);
        
        res.status(500).json({ error: "Error processing incoming message" });
    }
};
