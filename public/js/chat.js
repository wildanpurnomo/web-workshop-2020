const chatWindow = document.getElementById('chatWindow');
const messageInput = document.getElementById('message');
const senderInput = document.getElementById('sender');
const output = document.getElementById('output');
const btnSend = document.getElementById('send');
const socket = io('http://localhost:8000');

socket.on('reply', (data) => {
    output.innerHTML += `<div id='replyOutput'> <p>${data.sender}: ${data.message}</p> </div>`;
});

btnSend.addEventListener('click', () => {
    let message = messageInput.value.trim();
    let sender = senderInput.value.trim();

    if (message.length > 0 && sender.length > 0) {
        socket.emit('group', {
            message: message,
            sender : sender,
        });

        output.innerHTML += `<div id='msgOutput'> <p>You: ${message}</p> </div>`;
        messageInput.value = "";
        senderInput.value = "";
    }
});