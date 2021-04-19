import { useSelector } from "react-redux";

import classes from "./services.module.css";

import { selectChosenServiceItems } from "../../features/services/serviceSlice";
import { selectCurrentLanguage } from "../../features/language/languageSlice";

import { textResource } from "../../data/text_resource";

import Sidebar from "../../components/sidebar/sidebar.component";
import ServiceCard from "../../components/service-card/service-card.component";

const ServicesPage = () => {
  const chosenItems = useSelector(selectChosenServiceItems);
  const language = useSelector(selectCurrentLanguage);

  console.log(chosenItems);

  return (
    <div className={classes.services}>
      <div className="header">
        <h1>{textResource.services_title[language]}</h1>
      </div>
      <div className={classes.serviceSectionData}>
        <Sidebar />
        <div className={classes.serviceItems}>
          {chosenItems.map(({ title, description, imageSrc }) => (
            <ServiceCard
              key={title[language]}
              title={title[language]}
              description={description[language]}
              imageSrc={imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
