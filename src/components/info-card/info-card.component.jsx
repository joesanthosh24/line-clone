import classes from "./info-card.module.css";

const InfoCard = ({ imageSrc, imgAlt, title, subtitle }) => {
  return (
    <div className={classes.infoCard}>
      <img src={imageSrc} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default InfoCard;
