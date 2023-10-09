import classes from "./SuggestionPanel.module.css";
const SuggestionPanel = () => {
  return (
    <div className={classes.container}>
      <p>Try searching for : </p>
      <div className={classes.suggestions}>
        <div className={classes.item}>Test 1</div>
        <div className={classes.item}>Test 2</div>
        <div className={classes.item}>Test 3</div>
        <div className={classes.item}>Test 4</div>
      </div>
    </div>
  );
};

export default SuggestionPanel;
