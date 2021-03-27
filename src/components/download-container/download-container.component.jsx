import { useState } from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import classes from "./download-container.module.css";

const DownloadContainer = ({ size, Icon, margin }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        height: size,
        width: size,
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
      }}
      className={classes.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? <Icon /> : <ArrowDownwardIcon />}
    </div>
  );
};

export default DownloadContainer;
