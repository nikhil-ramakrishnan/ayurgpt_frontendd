import { useState } from "react";
import ChatContext from "./chatlog-context";

const ChatlogProvider = (props) => {
  const [messages, setMessages] = useState([]);
  const addMessageHandler = (msg, author) => {
    const newMessage = {
      timestamp: new Date().toISOString(),
      response: msg,
      author: author,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const chatContext = {
    messages: messages,
    addMessages: addMessageHandler,
  };
  return (
    <ChatContext.Provider value={chatContext}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatlogProvider;
