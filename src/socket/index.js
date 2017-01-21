import io from 'socket.io-client';

const socket = io.connect(SERVER_ORIGIN);

socket.emit('register', {
    channel: 'foobar',
});

export default socket;