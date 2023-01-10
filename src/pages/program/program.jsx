import React from "react";
import styles from "./program.module.css";
export const Program = () => {
  return (
    <section className={styles.program}>
      <div className={styles.program__top}>
        <div className={styles.top__left}>Workout Program Made For You</div>
        <div className={styles.top__right}>
          <div className={styles.top__right__content}>
            <span className={styles.top__right__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipiscing.
            </span>

            <button className={styles.btn__area}>Get Started</button>
          </div>
        </div>
      </div>
      <div className={styles.program__bottom}></div>
    </section>
  );
};
