import React from "react";
const ChatContext = React.createContext({
  messages: [],
  addMessages: (ChatMessage, author) => {},
});
export default ChatContext;
