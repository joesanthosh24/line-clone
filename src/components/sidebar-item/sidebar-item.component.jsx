import { useSelector } from "react-redux";

import { selectAllCategories } from "../../features/services/serviceSlice";
import { selectCurrentLanguage } from "../../features/language/languageSlice";

import classes from "./sidebar-item.module.css";

const SidebarItem = ({ chooseItem, category, chosenCategory }) => {
  const categories = useSelector(selectAllCategories);
  const language = useSelector(selectCurrentLanguage);

  const classToDisplay =
    chosenCategory === category ? classes.sidebarItemChosen : "";

  return (
    <div
      onClick={() => chooseItem(category)}
      className={`${classToDisplay} ${classes.sidebarItem}`}
    >
      <p>{categories[category][language]}</p>
    </div>
  );
};

export default SidebarItem;
