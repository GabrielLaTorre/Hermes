<div align="center">
 <h1>Hermes</h1>
</div>

<br><br>
## Description
Service to communicate with the Telegram API to process and send messages.

<br><br>
## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [More info](#more-info)

<br><br>
## Requirements

 ```
Node v22.13 or later
 ```

<br><br>
## Installation
  1. First clone this repository:
     
      ```
      git clone https://github.com/GabrielLaTorre/Hermes.git
      ```
  2. Go to project folder and install the dependencies 

      ```
        cd Hermes
        npm install
      ```

  3. Build the project

     ```
        npm run build
      ```

  4. Create a .env file on root and set the necessary environment variables

     ```
        AWS_REGION=
        INCOMING_MESSAGE_QUEUE_URL=
        OUTGOING_MESSAGE_QUEUE_URL=
        AWS_ACCESS_KEY_ID=
        AWS_SECRET_ACCESS_KEY=
        TELEGRAM_API_URL=
        TELEGRAM_API_KEY=
      ```
<br><br>
## Usage

- Run the command

    ```
    npm start
    ```

<br><br>
## More info

This project serves as a connector between the Telegram API and another service called [Atenea](https://github.com/GabrielLaTorre/Atenea), which processes incoming messages and performs different operations depending on their content. Finally, a response message will be sent to Telegram upon completion of processing.


In order to run this service you will need to register on the following platforms and obtain the credentials needed to configure the environment variables.

[AWS SQS](https://aws.amazon.com/sqs)

[TELEGRAM](https://core.telegram.org/bots/api)

- TELEGRAM: You will need to create a personal bot, referring to the documentation provided. Once all the services are up and running, you will be able to communicate with the bot.
  
- AWS: You will need to create 2 message queues in AWS SQS, one for incoming messages and one for outgoing messages.

