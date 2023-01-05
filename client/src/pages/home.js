import { React } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/mnrtchatlogo.png'
import { useDispatch, useSelector } from 'react-redux';
import { setusername } from '../redux/username'


const Home = () => {
    const { name } = useSelector((state) => state.username);
    const dispatch = useDispatch();

    const goToChat = () => {
      if(!name){
        alert('Enter a username');
      }
    };

    // const setUser = (e) => {
    //   setUsername(e.target.value);
    //   console.log(e.target.value);
    // };



return(
        <>
        <div className="home">
        <img alt="logo" className="rounded" src={logo}  height="100px" width="200px"/>
          <h2>Enter your username</h2>
          <p>ok {name}</p>
          <form action="#">
            <div className="input-group">
              <input
                type="text"
                className="form-control mx-3"
                value={name}
                onChange={(e) => dispatch(setusername(e.target.value))}
              ></input>
              <Link to={name ? "/chat" : "#"}>
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
