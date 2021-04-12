import { useSelector } from "react-redux";

import classes from "./services.module.css";

import { selectChosenServiceItems } from "../../features/services/serviceSlice";

import Sidebar from "../../components/sidebar/sidebar.component";
import ServiceCard from "../../components/service-card/service-card.component";

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
            <ServiceCard
              key={title.en}
              title={title.en}
              description={description.en}
              imageSrc={imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
