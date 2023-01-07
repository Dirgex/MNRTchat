import axios from 'axios';

export const sendMessage = async (msg) => {
    await axios.post('http://localhost:3001/message', (msg));
}

export default sendMessage;