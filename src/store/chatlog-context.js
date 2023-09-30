import React from "react";
const ChatContext = React.createContext({
  messages: [],
  addMessages: (ChatMessage) => {},
});
export default ChatContext;
