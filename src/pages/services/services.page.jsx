import classes from "./services.module.css";

import Sidebar from "../../components/sidebar/sidebar.component";

const ServicesPage = () => {
  return (
    <div className={classes.services}>
      <div className="header">
        <h1>Services</h1>
      </div>
      <Sidebar />
    </div>
  );
};

export default ServicesPage;
