import axios from "axios";

export const sendMessageApi = async (msg) => {
  try {
    await axios.post("http://localhost:3001/message", msg);
  } catch (error) {
    alert(error.message + "Something went wrong with the message");
  }
};

export const sendUsernameApi = async (username) => {
  try {
    await axios.post("http://localhost:3001/username/post", username);
  } catch (error) {
    alert(error.message + " Something went wrong posting user");
  }
};

export const getUserlistApi = async () => {
    try{
       return await axios.get("http://localhost:3001/username/get");

    }catch (error) {
        alert(error.message + " Something went wrong getting data");
    }
}