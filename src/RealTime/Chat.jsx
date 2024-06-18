import React from "react";

const Chat = ({ name, photo, message }) => {
  return (
    <div className="chat-item">
      <img src={photo} alt={name} />
      <p>
        <span className="chat-name">{name}</span> <span>{message}</span>
      </p>
    </div>
  );
};

export default Chat;
