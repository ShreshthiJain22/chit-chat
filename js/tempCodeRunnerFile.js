
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name); 