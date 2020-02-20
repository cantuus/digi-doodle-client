import socketIOClient from 'socket.io-client';
import config from '../config'


const socket = socketIOClient(`${config.SOCKET_ENDPOINT}`);


export default socket;