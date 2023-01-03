const HandleMessage = ({message, username, textChange, sendButton}) => {
  return (
    <form onSubmit={textChange}>
    <div className="sticky-bottom position-relative card-footer text-muted d-flex justify-content-start align-items-center p-3">
        <p>{username}</p>
      <input
        type="text"
        className="form-control"
        onChange={textChange}
        onKeyDown={textChange}
      ></input>
      <button onClick={sendButton} className="btn btn-success ms-2">
        <i className="bi bi-send"></i>
      </button>
    </div>
    </form>
  );
};

export default HandleMessage;
