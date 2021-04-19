import { useSelector } from "react-redux";

import classes from "./messenger-info.module.css";

import { selectAllData } from "../../features/messenger-data/messengerDataSlice";
import { selectCurrentLanguage } from "../../features/language/languageSlice";

import InfoCard from "../info-card/info-card.component";

const MessengerInfo = () => {
  const currentLanguage = useSelector(selectCurrentLanguage);
  const messengerData = useSelector(selectAllData);

  const indexArr = Object.keys(messengerData);

  return (
    <div className={classes.infoCards}>
      {indexArr.map((indx) => (
        // <div key={indx} className={classes.infoCard}>
        //   <img
        //     src={messengerData[indx].img}
        //     alt={messengerData[indx].title.en}
        //   />
        //   <h3>{messengerData[indx].title.en}</h3>
        //   <p>{messengerData[indx].subtitle.en}</p>
        // </div>
        <InfoCard
          key={indx}
          imageSrc={messengerData[indx].img}
          imageAlt={messengerData[indx].title[currentLanguage]}
          title={messengerData[indx].title[currentLanguage]}
          subtitle={messengerData[indx].subtitle[currentLanguage]}
        />
      ))}
    </div>
  );
};

export default MessengerInfo;
