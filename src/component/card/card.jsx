import React from "react";
import styles from "./card.module.css";

const Card = ({ data }) => {
  const name = data ? data.name : null;
  const company = data ? data.company : null;
  const getColor = () => {
    try {
      switch (data.color) {
        case "Dark":
          return styles.dark;
        case "Colorful":
          return styles.colorful;
        case "Light":
        default:
          return styles.light;
      }
    } catch (error) {
      return styles.light;
    }
  };
  const title = data ? data.title : null;
  const email = data ? data.email : null;
  const message = data ? data.message : null;
  const photo = data ? data.photo : null;
  return (
    <div className={`${styles.card} ${getColor()}`}>
      <div className={styles.img}>
        <img
          className={styles.img}
          src={photo && photo.secure_url}
          alt="face"
        />
      </div>
      <div className={styles.text}>
        <div className={styles.company}>
          <h1>{name}</h1>
          <p>{company}</p>
        </div>
        <div className={styles.desc}>
          <p>{title}</p>
          <p>{email}</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
