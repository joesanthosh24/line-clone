import { MoreHorizRounded } from "@material-ui/icons";

import classes from "./service-card.module.css";

const ServiceCard = ({ title, imageSrc, description }) => {
  return (
    <div className={classes.serviceItem}>
      <img src={imageSrc} alt={title} />
      <div className={classes.serviceItemContent}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={classes.iconContainer}>
        <MoreHorizRounded />
      </div>
    </div>
  );
};

export default ServiceCard;
