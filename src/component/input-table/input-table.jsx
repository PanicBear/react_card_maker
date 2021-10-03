import React from "react";
import styles from "./input-table.module.css";

const InputTable = (props) => {
  const file = {name:"chris"};
  return (
    <div className={styles.table}>
      <div className={`${styles.row} ${styles.flex3}`}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Company" />
        <select name="color">
          <option value="Light" selected>
            Light
          </option>
          <option value="Dark">Dark</option>
          <option value="Colorful">Colorful</option>
        </select>
      </div>
      <div className={`${styles.row} ${styles.flex2}`}>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Email" />
      </div>
      <div className={`${styles.row} ${styles.flex1}`}>
        <input type="text" placeholder="Message" />
      </div>
      <div className={`${styles.row} ${styles.flex2}`}>
        <div className={`${styles.btn} ${file ? styles.file : styles.noFile}`}>
          {file ? file.name : "No File"}
        </div>
        <div className={`${styles.btn} ${styles.add}`}>
          {file ? "Delete" : "Add"}
        </div>
      </div>
    </div>
  );
};
export default InputTable;
