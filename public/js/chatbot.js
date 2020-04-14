const chatWindow = document.getElementById('chatWindow');
const messageInput = document.getElementById('message');
const btnSend = document.getElementById('send');
const socket = io('http://localhost:8000');

socket.on('reply', (data) => {
    chatWindow.innerHTML += `<div id='replyOutput'> <p>${data.replyMsg}</p> </div>`;
});

btnSend.addEventListener('click', () => {
    let message = messageInput.value.trim();

    if (message.length > 0) {
        socket.emit('bot', {
            message: message,
        });

        chatWindow.innerHTML += `<div id='msgOutput'> <p>You: ${message}</p> </div>`;
        messageInput.value = "";
    }
});