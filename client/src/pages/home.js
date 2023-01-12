import { React } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mnrtchatlogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername} from '../redux/username';


const Home = () => {
  const { user } = useSelector((state) => state.username);
  // const { userid } = useSelector((state) => state.username);
  const dispatch = useDispatch();

  const goToChat = () => {
    if (!user) {
        alert("Enter a username");
    }else{
        dispatch(setUsername( user ));
    }
  };

  return (
    <>
      <div className="home">
        <img
          alt="logo"
          className="rounded"
          src={logo}
          height="100px"
          width="200px"
        />
        <h2>Enter your username</h2>
        <p>Your username will be :  {user}</p>
        <form onSubmit={goToChat}>
          <div className="input-group">
            <input
              type="text"
              className="form-control mx-3"
              value={user}
              onChange={(e) => dispatch(setUsername(e.target.value))}
            ></input>
            <Link to={user ? "/chat" : "#"}>
              <button className="btn btn-lg btn-success" onClick={goToChat}>
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
