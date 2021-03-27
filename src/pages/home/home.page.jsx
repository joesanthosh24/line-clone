import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";
import TvIcon from "@material-ui/icons/Tv";

import classes from "./home.module.css";

import background from "../../assets/images/background.jpeg";
import line from "../../assets/images/line-chat.png";

import DownloadContainer from "../../components/download-container/download-container.component";

const HomePage = () => {
  return (
    <div className={classes.home}>
      <img src={background} alt="Line Background" className={classes.bgImage} />
      <div className={classes.homeContent}>
        <h1>Life on LINE</h1>
        <p>Line--always at your side</p>
        <span className={classes.downloadText}>
          <img src={line} alt="Line Chat Logo White" />
          <span>Download</span>
        </span>
        <div className={classes.downloadContainers}>
          <DownloadContainer size="60px" margin={10} Icon={AppleIcon} />
          <DownloadContainer size="60px" margin={10} Icon={AndroidIcon} />
          <DownloadContainer size="60px" margin={10} Icon={TvIcon} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
