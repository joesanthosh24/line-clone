import { useDispatch } from "react-redux";

import classes from "./language-select.module.css";

import { chooseLanguage } from "../../features/language/languageSlice";

const languages = ["en", "jp"];

const LanguageSelect = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.languageSelect}>
      {languages.map((language) => (
        <p onClick={() => dispatch(chooseLanguage(language))}>
          {language.toUpperCase()}
        </p>
      ))}
    </div>
  );
};

export default LanguageSelect;
