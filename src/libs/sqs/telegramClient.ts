import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";

const client = axios.create({
    baseURL: `${process.env.TELEGRAM_API_URL}/bot${process.env.TELEGRAM_API_KEY}`,
  });

export const sendMessage = async (data: Record<string, any>) => {
    try {
        const config: AxiosRequestConfig = {
            headers: {
              'Accept': 'application/json',
            } as RawAxiosRequestHeaders,
          };

        const response = await client.post(`/sendMessage`, {
            chat_id: data.chat_id,
            text: data.message,
        });

        console.log("Message sent", response.data);
    } catch (error) {
        console.error("Error sending message", error);
    }
}