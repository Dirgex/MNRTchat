import { React } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mnrtchatlogo.png";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../redux/username";

const Home = () => {
  const { user } = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const whiteSpaceCheck = new RegExp(/\s/);
  const onlyAZ = new RegExp(/^[A-Za-z]*$/);

  const goToChat = () => {
    if (user.length > 20) {
      alert("Max 20 letters");
    } else if (!user) {
      alert("You have to enter a username");
    } else if (whiteSpaceCheck.test(user)) {
      alert("No whitespace in username");
    } else if (!onlyAZ.test(user)) {
      alert("Only A-Z in username");
    }  else {
      dispatch(setUsername(user));
      navigate("/chat");
    }
  };

  return (
    <>
      <div className="home">
        <img
          alt="logo"
          className="col-6 col-md-3 col-lg-2 img-fluid rounded"
          src={logo}
          width="35%"
        />
        <h2>Enter your username</h2>
        <p>Your username will be : {user}</p>
        <form onSubmit={goToChat}>
          <div className="input-group">
            <input
              type="text"
              className="form-control mx-3"
              value={user}
              onChange={(e) => dispatch(setUsername(e.target.value))}
            ></input>
            <button className="btn btn-lg btn-success" onClick={goToChat}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
