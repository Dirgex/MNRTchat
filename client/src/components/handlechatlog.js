const HandleChatlog = ({ chat }) => {
  return (
    <div>
      {chat.map((item) => {
        return (
          <div key={item.id}>
            <h3 className="col-2 ms-auto">{item.username}</h3>
            <p className="ownBgText col-8 ms-auto p-2 ms-3 mb-1 rounded-3">
              {item.msg}
            </p>
            <p className="col-2 ms-auto ms-3 mb-3 rounded-3">23:58</p>
          </div>
        );
      })}
    </div>
  );
};

export default HandleChatlog;
