import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./sidebar.module.css";

import {
  selectAllCategories,
  chooseCategory,
} from "../../features/services/serviceSlice";

import SidebarItem from "../sidebar-item/sidebar-item.component";

const Sidebar = () => {
  const categories = useSelector(selectAllCategories);
  const dispatch = useDispatch();
  const [chosenCategory, setChosenCategory] = useState("products");

  useEffect(() => {
    dispatch(chooseCategory(chosenCategory));
  }, [chosenCategory, dispatch]);

  const categoriesArray = Object.keys(categories);

  return (
    <div className={classes.sidebar}>
      {categoriesArray.map((category) => (
        <SidebarItem
          key={category}
          chooseItem={setChosenCategory}
          category={category}
          chosenCategory={chosenCategory}
        />
      ))}
    </div>
  );
};

export default Sidebar;
