const socket = require('socket.io');
const df = require('dialogflow');
const sessionClient = new df.SessionsClient();

module.exports = (server) => {
    const io = socket(server);

    io.on('connection', (socket) => {
        console.log('A client has been connected ' + socket.id);

        socket.on('group', (data) => {
            socket.broadcast.emit('reply', data);
        });

        socket.on('bot', async (data) => {
            let replyMsg = await processInput(data.message, socket.id);
            socket.emit('reply', replyMsg);
        })
    }); 
}

const processInput = async (input, clientId) => {
    let sessionPath = sessionClient.sessionPath('your-agent-id', clientId);
    let request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: input,
                languageCode: 'id',
            }
        }
    };

    try {
        let response = await sessionClient.detectIntent(request);
        let intent = response[0].queryResult.intent;

        if (intent) {
            return { replyMsg: response[0].queryResult.fulfillmentText };
        }
    } catch (error) {
        console.log(error);
        return { replyMsg: "error" };
    }
}