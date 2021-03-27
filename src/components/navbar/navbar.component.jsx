import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LanguageIcon from "@material-ui/icons/Language";

import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.homeText}>
        <h2>LINE</h2>
      </div>
      <div className={classes.navContent}>
        <h2 className={classes.active}>Life on Line</h2>
        <h2>Messenger App</h2>
        <h2>Services</h2>
      </div>
      <div className={classes.language}>
        <LanguageIcon />
        <h2>ENG</h2>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
};

export default Navbar;
