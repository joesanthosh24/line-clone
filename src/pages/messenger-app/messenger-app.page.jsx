import { useSelector } from "react-redux";

import classes from "./messenger-app.module.css";

import MessengerInfo from "../../components/messenger-info/messenger-info.component";

import { selectCurrentLanguage } from "../../features/language/languageSlice";

import { textResource } from "../../data/text_resource";

const MessengerAppPage = () => {
  const language = useSelector(selectCurrentLanguage);

  return (
    <div className={classes.messengerApp}>
      <div className="header messages-header">
        <h1>{textResource.messenger_title[language]}</h1>
        <p>{textResource.messages_subtitle[language]}</p>
      </div>
      <MessengerInfo />
    </div>
  );
};

export default MessengerAppPage;
