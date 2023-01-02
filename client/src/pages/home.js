import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/mnrtchatlogo.png'


function Home(){
    const [username, setUsername] = useState("");

    const goToChat = () => {
      if(!username){
        alert('Enter a username');
      }else {
        localStorage.setItem('user', username)
      }
    };

    const setUser = (e) => {
      setUsername(e.target.value);
      console.log(e.target.value);
    };



return(
        <>
        <div className="home">
        <img className="rounded" src={logo}  height="100px" width="200px"/>
          <h2>Enter your username</h2>
          <form action="#">
            <div className="input-group">
              <input
                type="text"
                className="form-control mx-3"
                value={username}
                onChange={setUser}
              ></input>
              <Link to={username ? "/chat" : "#"}>
              <button
                className="btn btn-lg btn-success"
                onClick={goToChat}
              >
                Submit
              </button>
              </Link>
            </div>
          </form>
          </div>
        </>
      )
}


export default Home;
