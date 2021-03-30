import classes from "./messenger-info.module.css";

import texts from "../../assets/images/texts.png";

const MessengerInfo = () => {
  return (
    <div className={classes.infoCards}>
      <div className={classes.infoCard}>
        <img src={texts} />
        <h3>Texts, Voice & Video Calls</h3>
        <p>
          You can send one-on-one and group texts, and use international voice
          and video calls with your friends.
        </p>
      </div>
      <div className={classes.infoCard}>
        <img src={texts} />
        <h3>Texts, Voice & Video Calls</h3>
        <p>
          You can send one-on-one and group texts, and use international voice
          and video calls with your friends.
        </p>
      </div>
      <div className={classes.infoCard}>
        <img src={texts} />
        <h3>Texts, Voice & Video Calls</h3>
        <p>
          You can send one-on-one and group texts, and use international voice
          and video calls with your friends.
        </p>
      </div>
    </div>
  );
};

export default MessengerInfo;
