import React from "react";
import styles from "./input-table.module.css";

const InputTable = ({ data }) => {
  const name = data ? data.name : null;
  const company = data ? data.company : null;
  const color = data ? data.color : null;
  const title = data ? data.title : null;
  const email = data ? data.email : null;
  const message = data ? data.message : null;
  const photo = data ? data.photo : null;

  return (
    <div className={styles.table}>
      <div className={`${styles.row} ${styles.flex3}`}>
        <input type="text" placeholder="Name" defaultValue={name} />
        <input type="text" placeholder="Company" defaultValue={company} />
        <select name="color" defaultValue={color??"Light"}>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
          <option value="Colorful">Colorful</option>
        </select>
      </div>
      <div className={`${styles.row} ${styles.flex2}`}>
        <input type="text" placeholder="Title" defaultValue={title} />
        <input type="text" placeholder="Email" defaultValue={email} />
      </div>
      <div className={`${styles.row} ${styles.flex1}`}>
        <input type="text" placeholder="Message" defaultValue={message} />
      </div>
      <div className={`${styles.row} ${styles.flex2}`}>
        <div className={`${styles.btn} ${photo ? styles.file : styles.noFile}`}>
          {photo ? photo : "No File"}
        </div>
        <div className={`${styles.btn} ${styles.add}`}>
          {photo ? "Delete" : "Add"}
        </div>
      </div>
    </div>
  );
};
export default InputTable;
