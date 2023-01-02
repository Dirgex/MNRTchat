import { React, useState } from "react";
import { Link } from "react-router-dom";


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
          <h2>Enter your username</h2>
          <form action="#">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
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
