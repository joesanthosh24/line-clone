import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LanguageIcon from "@material-ui/icons/Language";

import classes from "./navbar.module.css";

import LanguageSelect from "../language-select/language-select.component";

import { textResource } from "../../data/text_resource";

const Navbar = ({ selected, lang }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [languageSelectorOpen, setLanguageSelectorOpen] = useState(false);

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
              {textResource.messenger_title[lang]}
            </p>
          </Link>
          <Link to="/services">
            <p className={selected === "/services" && classes.active}>
              {textResource.services_title[lang]}
            </p>
          </Link>
        </div>
        <div
          onClick={() => setLanguageSelectorOpen(!languageSelectorOpen)}
          className={classes.language}
        >
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
      {languageSelectorOpen && <LanguageSelect />}
      {dropDownOpen && (
        <div className={classes.navContentDropDown}>
          <Link to="/">
            <p>Life on Line</p>
          </Link>
          <Link to="/messages">
            <p>{textResource.messenger_title[lang]}</p>
          </Link>
          <Link to="/services">
            <p>{textResource.services_title[lang]}</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
