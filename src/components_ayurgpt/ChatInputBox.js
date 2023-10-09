import React, { useState } from "react";
import "./ChatInputBox.css";
import { useContext } from "react";
import ChatContext from "../store/chatlog-context";
import { LanguageContext } from "../contexts/LanguageContext";

const ChatInputBox = () => {
  const [textInput, setTextInput] = useState("");
  const chatCtx = useContext(ChatContext);
  const { selectedLanguage } = useContext(LanguageContext);
  async function testFetchHandler() {
    const response = await fetch("http://localhost:5000/predicted", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        statement: textInput,
        language: selectedLanguage,
      }),
    });
    const data = await response.json();
    console.log(data);
    console.log(data.Slogan);
    chatCtx.addMessages(data.Slogan, "AyurGPT-Server");
  }
  const sendHandler = () => {
    if (textInput.trim() !== "") {
      testFetchHandler();
      chatCtx.addMessages(textInput, "User");
      setTextInput("");
    }
  };
  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };
  return (
    <div className="chat-input-holder">
      <textarea
        className="chat-input-textarea"
        value={textInput}
        placeholder="Type your message here...."
        onChange={handleInputChange}
        rows="2"
      ></textarea>
      <button className="sendBtn" onClick={sendHandler}>
        Send
      </button>
    </div>
  );
};

export default ChatInputBox;
