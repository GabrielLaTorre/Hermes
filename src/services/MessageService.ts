import { sendMessage } from '../libs/sqs/producer';
import { sendMessage as sendTelegramMessage } from '../libs/sqs/telegramClient';

interface Message { 
    chatId: string;
    text: string;
}


export const processIncomingMessage = (message: Record<string, any>) => {

    const processedMessage: Message = {
        chatId: message?.chat?.id,
        text: message?.text,
    }

    return processedMessage;
}

export const sendIncomingMessage = (message: Record<string, any>) => {
    console.log('Sending incoming message to queue', message);

    return sendMessage({ message });
}

export const processOutgoingMessage = async (data: Record<string, any>) => { 
    console.log('Processing outgoing message', data);

    await sendTelegramMessage(data);
}

module.exports = { processIncomingMessage, processOutgoingMessage, sendIncomingMessage } 