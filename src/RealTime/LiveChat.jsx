import React, { useEffect, useState } from "react";
import Chat from "./Chat";

const LIMIT = 10;
const LiveChat = () => {
  const [inputMessage, setInputMessages] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    handleAPICall();

    const i = setInterval(() => {
      handleAPICall();
    }, 3000);

    return () => clearInterval(i);
  }, []);

  const handleAPICall = () => {
    const data = [
      {
        name: `Demo ${Math.ceil(Math.random() * 100)}`,
        photo: "https://yt4.ggpht.com/ytc/AIdro_nBq8O2-Z3INJRsSe22Beid1P4OBSmiu10bflzfaaSs_C0=s32-c-k-c0x00ffffff-no-rj",
        message: "Message",
      },
    ];

    setMessages((msg) => {
      return [...msg, ...data].slice(-LIMIT);
    });
  };

  return (
    <div className="chat-input">
      <div className="chat">
        {messages.map((msg, index) => {
          return <Chat key={index} {...msg} />;
        })}
      </div>
      <div>
        <input value={inputMessage} type="text" placeholder="Enter Comment" onChange={(e) => setInputMessages(e.target.value)} />
        <button
          onClick={() => {
            setMessages((msg) =>
              [
                ...msg,
                {
                  name: `Demo ${Math.ceil(Math.random() * 100)}`,
                  photo: "https://yt4.ggpht.com/ytc/AIdro_nBq8O2-Z3INJRsSe22Beid1P4OBSmiu10bflzfaaSs_C0=s32-c-k-c0x00ffffff-no-rj",
                  message: inputMessage,
                },
              ].slice(-LIMIT)
            );
            setInputMessages("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
