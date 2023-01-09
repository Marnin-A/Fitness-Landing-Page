import React from "react";
import styles from "./card.module.css";

export const Card = (props) => {
  // Pass the background image as props and create an
  // object to pass it to the card div
  let background = props.img;

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.text}>
        <div className={styles.title}>
          <span className={styles.title__text}>{props.name}</span>
          <span className={styles.time}>58:24</span>
        </div>
        <div className={styles.calories}>250 est calories </div>
      </div>
    </div>
  );
};
