import { sendMessage } from '../libs/sqs/producer';

interface Message { 
    chatId: string;
    text: string;
}


export const processIncomingMessage = (message: Record<string, any>) => {

    const processedMessage: Message = {
        chatId: message.chat.id,
        text: message.text,
    }

    return processedMessage;
}

export const sendIncomingMessage = (message: Record<string, any>) => {
    console.log('Sending incoming message to queue', message);

    return sendMessage({ message });
}

// export const processOutgoingMessage = (message) { 

// }

module.exports = { processIncomingMessage, sendIncomingMessage } 