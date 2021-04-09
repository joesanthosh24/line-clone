import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./sidebar.module.css";

import {
  selectAllCategories,
  chooseCategory,
} from "../../features/services/serviceSlice";

const Sidebar = () => {
  const categories = useSelector(selectAllCategories);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("products");

  useEffect(() => {
    dispatch(chooseCategory(category));
  }, [category, dispatch]);

  const categoriesArray = Object.keys(categories);

  return (
    <div className={classes.sidebar}>
      {categoriesArray.map((category) => (
        <p onClick={() => setCategory(category)} key={category}>
          {categories[category].en}
        </p>
      ))}
    </div>
  );
};

export default Sidebar;
