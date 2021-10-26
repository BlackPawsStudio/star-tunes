const enableChat = (user) => {
  const chatHead = document.getElementById('chat-head');
  const chatMessages = document.getElementById('chat-messages');
  const chatText = document.getElementById('chat-text-field');
  const send = document.getElementById('chat-send');
  const socket = io('https://pointing-poker-backend.herokuapp.com')
  socket.emit('chat-connect-user', user.name)
  send.addEventListener('click', () => {
    if(chatText.value !== '')
      socket.emit('chat-message-request', chatText.value);
    chatText.value = '';
  })
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      if (chatText.value !== '')
        socket.emit('chat-message-request', chatText.value);
      chatText.value = '';
    }
  })
  socket.on('chat-message-post', data => {
    chatMessages.innerHTML += getMessage(data[0], data[1]);
  })
  socket.on('chat-send-all-users', usersArr => {
    chatHead.innerHTML = `${usersArr.length} online`
  })
}