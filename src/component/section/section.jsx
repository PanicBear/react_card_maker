import React from "react";
import styles from "./section.module.css";

const Section = (props) => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Login</h1>
      <button className={styles.btn}>Google</button>
      <button className={styles.btn}>Github</button>
    </section>
  );
};
export default Section;
