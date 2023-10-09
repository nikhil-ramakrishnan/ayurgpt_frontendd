import classes from "./SideMenu.module.css";

const SideMenu = () => {
  return (
    <aside className={classes.sideMenu}>
      <div className={classes.brandName}>
        <p>AyurGPT</p>
      </div>
      <div className={classes.sideBtnMenu}>New chat</div>
    </aside>
  );
};

export default SideMenu;
