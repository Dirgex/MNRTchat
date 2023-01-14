import axios from "axios";

//Api call to send our message to the message endpoint in backend
export const sendMessageApi = async (msg) => {
  try {
    await axios.post("http://localhost:3001/message", msg);
  } catch (error) {
    alert(error.message + "Something went wrong with the message");
  }
};
