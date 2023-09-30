import React from "react";
import icon from "../assets/icon.svg";
import "../components/MachineReply.css";
const MachineReply = (props) => {
  return (
    <div className="machine-message">
      <div className="chat-message-center">
        <div className="machine-avatar">
          <img src={icon} alt="avatar-app"></img>
        </div>
        <div className="message">
          <p className="text">{props.message}</p>
        </div>
      </div>
    </div>
  );
};
export default MachineReply;
