import React,{useState} from "react";
import icon from "../assets/icon.svg";
import "../components/MachineReply.css";
const MachineReply = (props) => {
  //Change
  const [selectedWord, setSelectedWord] = useState('');
  // Function to handle the right-click event
  const handleMouseUp = () => {
    setSelectedWord(window.getSelection().toString().trim());
  }

  async function handleDetails() {
    console.log("Getting more details of "+selectedWord);
    // var textInput = "Getting more details of "+selectedWord;
    var textInput = selectedWord;
    const response = await fetch("http://localhost:5000/predicted", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ statement: textInput }),
    });
    const data = await response.json();
    console.log(data);
    console.log(data.Slogan);
  }
  //Change
  return (
    <div onMouseUp={handleMouseUp}>
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
      {/* Change */}
      <button className="sendBtn" onClick={handleDetails}>
        Get more details
      </button>
    {/* Change */}
    </div>
  );
};
export default MachineReply;
