import io from 'socket.io-client';

const socket = io.connect(SERVER_ORIGIN);

export default socket;