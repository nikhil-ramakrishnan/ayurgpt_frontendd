import "./ChatPage.css";
import classes from "./AyurHub.module.css";
import ImageSearchInput from "../components_ayurhub/ImageSearchInput";
import SuggestionPanel from "../components_ayurhub/SuggestionPanel";
import AyurHubIcon from "../assets/ayurhublogo.png";
import { useState } from "react";
// import "../../../../Indian Medicinal Leaves Image Datasets";

const AyurHub = () => {
  const [content, setContent] = useState({
    path: "",
    text: "",
  });
  const searchHandler = (content) => {
    console.log("../assets/dataset/" + content.path);
    setContent(content);
  };
  return (
    <div className={classes.hubMain}>
      <aside className={classes.sideMenu}>
        <div className="brand-name">
          <p>AyurHub</p>
        </div>
      </aside>
      <div className={classes.containerMain}>
        <div className={classes.containerLeft}>
          <ImageSearchInput onSearchPressed={searchHandler} />
          <SuggestionPanel />
          <div className={classes.suggestionPanel}></div>
        </div>
        <div className={classes.containerRight}>
          <div className={classes.imageData}>
            <img src={"../assets/dataset/" + content.path + "/339.jpg"} />
          </div>
          <p className={classes.ImageDescription}>{content.text}</p>
        </div>
      </div>
    </div>
  );
};
export default AyurHub;
