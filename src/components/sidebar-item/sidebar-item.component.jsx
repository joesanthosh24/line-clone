import { useSelector } from "react-redux";

import { selectAllCategories } from "../../features/services/serviceSlice";

import classes from "./sidebar-item.module.css";

const SidebarItem = ({ chooseItem, category, chosenCategory }) => {
  const categories = useSelector(selectAllCategories);

  const classToDisplay =
    chosenCategory === category ? classes.sidebarItemChosen : "";

  return (
    <div
      onClick={() => chooseItem(category)}
      className={`${classToDisplay} ${classes.sidebarItem}`}
    >
      {categories[category].en}
    </div>
  );
};

export default SidebarItem;
