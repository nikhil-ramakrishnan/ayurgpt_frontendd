import React from "react";
import "../components/ChatMessage.css";
import userIcon from "../assets/profile.png";
const ChatMessage = (props) => {
  return (
    <div className="chat-message">
      <div className="chat-message-center">
        <div className="avatar">
          <img src={userIcon} alt="User Icon"></img>
        </div>
        <div className="message">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
};
export default ChatMessage;
