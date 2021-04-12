import { useSelector } from "react-redux";

import classes from "./services.module.css";

import { selectChosenServiceItems } from "../../features/services/serviceSlice";

import Sidebar from "../../components/sidebar/sidebar.component";

const ServicesPage = () => {
  const chosenItems = useSelector(selectChosenServiceItems);

  console.log(chosenItems);

  return (
    <div className={classes.services}>
      <div className="header">
        <h1>Services</h1>
      </div>
      <div className={classes.serviceSectionData}>
        <Sidebar />
        <div className={classes.serviceItems}>
          {chosenItems.map(({ title, description, imageSrc }) => (
            <div key={title.en} className={classes.serviceItem}>
              <img src={imageSrc} alt={title.en} />
              <div className={classes.serviceItemContent}>
                <h4>{title.en}</h4>
                <p>{description.en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
