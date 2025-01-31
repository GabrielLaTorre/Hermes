import { receiveMessages } from "./libs/sqs/consumer";
import startServer from "./server/server";

async function init() {
    receiveMessages();
    startServer();
}

init();