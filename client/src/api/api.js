import axios from 'axios';

export const sendMessage = async (msg) => {
    try{
    await axios.post('http://localhost:3001/message', (msg));
}catch(error){
    alert(error.message)
}
}

export default sendMessage;