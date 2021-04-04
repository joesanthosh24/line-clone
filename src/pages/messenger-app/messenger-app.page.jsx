import { useSelector } from "react-redux";

import classes from "./messenger-app.module.css";

import MessengerInfo from "../../components/messenger-info/messenger-info.component";

import { selectHeadingData } from "../../features/messenger-data/messengerDataSlice";

const MessengerAppPage = () => {
  const headingData = useSelector(selectHeadingData);

  return (
    <div className={classes.messengerApp}>
      <div className={classes.header}>
        <h1>{headingData.title.en}</h1>
        <p>{headingData.description.en}</p>
      </div>
      <MessengerInfo />
    </div>
  );
};

export default MessengerAppPage;
