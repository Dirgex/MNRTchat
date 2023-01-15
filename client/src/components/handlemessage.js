import { useDispatch, useSelector } from "react-redux";
import { setMessage, sendMessage } from "../redux/message";
import { v4 as uuidv4 } from "uuid";

const HandleMessage = ({ user }) => {
  const { msg } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const date = new Date();
  let timestamp = date.toLocaleTimeString("SE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="sticky-bottom position-relative card-footer text-muted d-flex justify-content-start align-items-center p-3">
          <input
            type="text"
            className="form-control"
            value={msg}
            onChange={(e) => dispatch(setMessage(e.target.value))}
          ></input>
          <button
            onClick={() =>
              { if(!msg){
                return;
              }else{
              dispatch(
                sendMessage({
                  id: uuidv4(),
                  msg,
                  username: user,
                  timestamp: timestamp,
                })
              )
            }
            }
          }
            className="btn btn-success ms-2"
          >
            <i className="bi bi-send"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default HandleMessage;
