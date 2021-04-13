import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LanguageIcon from "@material-ui/icons/Language";

import classes from "./navbar.module.css";

const Navbar = ({ selected }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  useEffect(() => {
    setDropDownOpen(false);
  }, [selected]);

  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.homeText}>
          <Link to="/">
            <p>LINE</p>
          </Link>
        </div>
        <div className={classes.navContent}>
          <Link to="/">
            <p className={selected === "/" && classes.active}>Life on Line</p>
          </Link>
          <Link to="/messages">
            <p className={selected === "/messages" && classes.active}>
              Messenger App
            </p>
          </Link>
          <Link to="/services">
            <p className={selected === "/services" && classes.active}>
              Services
            </p>
          </Link>
        </div>
        <div className={classes.language}>
          <LanguageIcon />
          <p>EN</p>
          <ArrowDropDownIcon />
        </div>
        <div
          className={classes.hamburger}
          onClick={() => setDropDownOpen(!dropDownOpen)}
        >
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
      </div>
      {dropDownOpen && (
        <div className={classes.navContentDropDown}>
          <Link to="/">
            <p>Life on Line</p>
          </Link>
          <Link to="/messages">
            <p>Messenger App</p>
          </Link>
          <Link to="/services">
            <p>Services</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
