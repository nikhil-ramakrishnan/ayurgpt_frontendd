import "./ChatPage.css";
import classes from "./AyurHub.module.css";
import ImageSearchInput from "../components_ayurhub/ImageSearchInput";
import SuggestionPanel from "../components_ayurhub/SuggestionPanel";
import AyurHubIcon from "../assets/ayurhublogo.png";
const AyurHub = () => {
  return (
    <div className={classes.hubMain}>
      <aside className={classes.sideMenu}>
        <div className="brand-name">
          <p>AyurHub</p>
        </div>
      </aside>
      <div className={classes.containerMain}>
        <div className={classes.containerLeft}>
          <ImageSearchInput />
          <SuggestionPanel />
          <div className={classes.suggestionPanel}></div>
        </div>
        <div className={classes.containerRight}>
          <div className={classes.imageData}>
            <img src={AyurHubIcon} />
          </div>
          <p className={classes.ImageDescription}>Welcome to AyurHub</p>
        </div>
      </div>
    </div>
  );
};
export default AyurHub;
