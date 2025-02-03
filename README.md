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

This project serves as a connector between the Telegram API and another service called [Athena](https://github.com/GabrielLaTorre/Atenea), which processes incoming messages and performs different operations depending on their content. Finally, a response message will be sent to Telegram upon completion of processing.
