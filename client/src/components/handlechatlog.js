import { useEffect, useRef } from "react";


const HandleChatlog = ({ chat, user }) => {
  const autoScroll = useRef(null);

  useEffect(() => {
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


              <p className="col-2 ms-auto ms-3 mb-3 rounded-3 text-end text-muted">
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
              <p className="col-2 mb-3 rounded-3 text-muted">
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
