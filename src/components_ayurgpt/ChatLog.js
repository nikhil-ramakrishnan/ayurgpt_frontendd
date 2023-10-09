import "./ChatLog.css";
import ChatMessage from "./ChatMessage";
import MachineReply from "./MachineReply";
import { useContext } from "react";
import ChatContext from "../store/chatlog-context";

const ChatLog = (props) => {
  const chatCtx = useContext(ChatContext);
  const messages = chatCtx.messages;
  const messageList = messages.map((msg) => {
    if (msg.author === "AyurGPT-Server") {
      return <MachineReply key={msg.timestamp} message={msg.response} />;
    } else {
      return <ChatMessage key={msg.timestamp} message={msg.response} />;
    }
  });
  return (
    <div className="chat-log">
      {messageList}
      {/* <ChatMessage />
      <MachineReply />
      <ChatMessage />
      <MachineReply />
      <ChatMessage />
      <MachineReply /> */}
    </div>
  );
};

export default ChatLog;
