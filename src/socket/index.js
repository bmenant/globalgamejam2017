import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000');
//const socket = io.connect('192.168.1.54:4000');
/*socket.on('Wave', ()=>{
    socket.emit("Wave2", {});
});*/

export default socket;