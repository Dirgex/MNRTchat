import { useDispatch, useSelector } from "react-redux";
import { setMessage, sendMessage } from "../redux/message";

const HandleMessage = () => {
  const { msg } = useSelector((state) => state.message);
  const dispatch = useDispatch();


  return (
    <>    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
        <p>{msg}</p>
      <div className="sticky-bottom position-relative card-footer text-muted d-flex justify-content-start align-items-center p-3">
        <input
          type="text"
          className="form-control"
          value={msg}
          onChange={(e) => dispatch(setMessage(e.target.value))}
        ></input>
        <button onClick={() => dispatch(sendMessage())} className="btn btn-success ms-2">
          <i className="bi bi-send"></i>
        </button>
      </div>
    </form>
    </>

  );
};

export default HandleMessage;
