import classes from "./messenger-app.module.css";

import MessengerInfo from "../../components/messenger-info/messenger-info.component";

const MessengerAppPage = () => {
  return (
    <div className={classes.messengerApp}>
      <div className={classes.header}>
        <h1>Messenger APP</h1>
        <p>
          New communication app which allows you to make FREE voice calls and
          send FREE messages whenever and wherever you are, 24 hours a day!
        </p>
      </div>
      <MessengerInfo />
    </div>
  );
};

export default MessengerAppPage;
