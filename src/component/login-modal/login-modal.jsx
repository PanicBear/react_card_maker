import React from "react";
import styles from "./login-modal.module.css";

const LoginModal = ({ auth }) => (
  <section className={styles.wrapper}>
    <h1 className={styles.title}>Login</h1>
    <button className={styles.btn} onClick={() => auth.setCredential("google")}>
      Google
    </button>
    <button className={styles.btn} onClick={() => auth.setCredential("github")}>
      Github
    </button>
  </section>
);

export default LoginModal;
