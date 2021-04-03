import classes from "./messenger-info.module.css";

import { messengerData } from "../../data/messenger-app.data";

const MessengerInfo = () => {
  const indexArr = Object.keys(messengerData);

  console.log(messengerData[2].img);

  return (
    <div className={classes.infoCards}>
      {indexArr.map((indx) => (
        <div key={indx} className={classes.infoCard}>
          <img
            src={messengerData[indx].img}
            alt={messengerData[indx].title.en}
          />
          <h3>{messengerData[indx].title.en}</h3>
          <p>{messengerData[indx].subtitle.en}</p>
        </div>
      ))}
    </div>
  );
};

export default MessengerInfo;
