import { useEffect, useRef } from "react";

const HandleChatlog = ({ chat, user }) => {
  const autoScroll = useRef(null);

  useEffect(() => {
    //used to autoscroll when new messages start reaching goes to bottom of screen
    autoScroll.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      {chat.map((item) => {
        if (item.username === user)
          return (
            <div key={item.id}>
              <p className="ownBgText col-6 ms-auto p-2 mt-3 ms-3 p-2 mb-1 rounded-3 text-end text-break">
                {item.msg}
              </p>

              <p className="col-4 ms-auto ms-3 mb-3 rounded-3 text-end text-muted">
                You - {item.timestamp}
              </p>
              <div ref={autoScroll} />
            </div>
          );
        else
          return (
            <div key={item.id}>
              <p className="otherBgText col-6 p-2 mb-1 mt-3 rounded-3 text-break">
                {item.msg}
              </p>
              <p className="col-4 mb-3 rounded-3 text-muted">
                {item.username} - {item.timestamp}
              </p>
              <div ref={autoScroll} />
            </div>
          );
      })}
    </>
  );
};

export default HandleChatlog;
