const HandleOnlineUsers = ({ userlist }) => {
  return (
    <div>
      <h4 className="my-3 text-success"><u>Users online</u></h4>
      {userlist.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
};

export default HandleOnlineUsers;
