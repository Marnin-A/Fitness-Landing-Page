import React from "react";
import { Card } from "../../components/cards/card";
import styles from "./exercises.module.css";

export const Exercises = () => {
  return (
    <div className={styles.exercise}>
      <div className={styles.header}>
        <span className={styles.header__text}>Popular Exercises</span>
        <a className={styles.more}>SEE MORE EXERCISES</a>
      </div>
      <div className={styles.exercises}>
        <Card name="Treadmill" key="1" />
        <Card name="Stretching" key="2" />
        <Card name="Yoga" key="3" />
        <Card name="Running" key="4" />
        <Card name="Lifting" key="5" />
        <Card name="Pushing" key="6" />
      </div>
    </div>
  );
};
