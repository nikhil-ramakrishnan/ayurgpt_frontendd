import React, { useState, useContext } from "react";
import classes from "./MachineReply.module.css"
import logo from "../assets/logo.png"
import Popper, { PopperProps } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import ChatContext from "../store/chatlog-context"




const MachineReply = (props: { message: string }) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<PopperProps['anchorEl']>(null);

  const previousAnchorElPosition = React.useRef<DOMRect | undefined>(undefined);
  const chatCtx = useContext(ChatContext)
  //Change
  const [selectedWord, setSelectedWord] = useState("");


    React.useEffect(() => {
    if (anchorEl) {
      if (typeof anchorEl === 'object') {
        previousAnchorElPosition.current = anchorEl.getBoundingClientRect();
      } else {
        previousAnchorElPosition.current = anchorEl().getBoundingClientRect();
      }
    }
  }, [anchorEl]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleMouseUp = () => {
    const selection = window.getSelection();

    if (!selection || selection.anchorOffset === selection.focusOffset) {
      handleClose();
      return;
    }

    const getBoundingClientRect = () => {
      if (selection.rangeCount === 0 && previousAnchorElPosition.current) {
        setOpen(false);
        return previousAnchorElPosition.current;
      }
      return selection.getRangeAt(0).getBoundingClientRect();
    };

    setOpen(true);
    changedSelected();
    setAnchorEl({ getBoundingClientRect });
  };
  // const id = open ? 'virtual-element-popper' : undefined;
  
  const changedSelected = React.useCallback(() => {
    const selected = window.getSelection();
    if (selected) {
    const selectedText = selected.toString();
    if (selected.isCollapsed || !selectedText.length) {
      setSelectedWord('');
    }
    console.log("Making query for ", selectedWord)
    setSelectedWord(selectedText);
  }}, [selectedWord])


  async function handleDetails() {
    console.log("Getting more details of " + selectedWord);
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
    chatCtx.addMessages(data.Slogan, "AyurGPT-Server");

    console.log(data);
    console.log(data.Slogan);
  }
  //Change
  return (
    <div>
      <div className={classes.machineMessage}>
        <div className={classes.chatMessageCenter}>
          <div className={classes.machineAvatar}>
            <img src={logo} alt="ayurgpt-logo" />
          </div>
          <div className={classes.message} onMouseUp={handleMouseUp } onMouseLeave={handleClose}>
            <Typography className={classes.text}>{props.message}</Typography>
              <Popper open={open} anchorEl={anchorEl} transition placement="top-start">
                {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.toggleBtn} onClick={handleDetails} >Search for {selectedWord}</div>
          </Fade>
        )}
              </Popper>

          </div>
        </div>
      </div>
      {/* Change */}
      {/* <button className="sendBtn" onClick={handleDetails}></button> */}
      {/* Change */}
    </div>
  );
};
export default MachineReply;
