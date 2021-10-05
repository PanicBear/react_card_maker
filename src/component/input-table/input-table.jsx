import React, { useEffect } from "react";
import styles from "./input-table.module.css";

const InputTable = ({ auth, data, db }) => {
  const name = data ? data.name : null;
  const company = data ? data.company : null;
  const color = data ? data.color : null;
  const title = data ? data.title : null;
  const email = data ? data.email : null;
  const message = data ? data.message : null;
  const photo = data ? data.photo : null;

  const nameRef = React.useRef();
  const companyRef = React.useRef();
  const colorRef = React.useRef();
  const titleRef = React.useRef();
  const emailRef = React.useRef();
  const messageRef = React.useRef();
  // const photoRef = React.useRef();
  const onAdd = () => {
    const value = {
      name: nameRef.current.value,
      company: companyRef.current.value,
      color: colorRef.current.value,
      title: titleRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    }
    // db.C()
  }
  const onDelete = () => {
    console.log("onDelete");
  }
  return (
    <div className={styles.table}>
      <div className={`${styles.row} ${styles.flex3}`}>
        <input ref={nameRef} type="text" placeholder="Name" defaultValue={name} />
        <input ref={companyRef} type="text" placeholder="Company" defaultValue={company} />
        <select ref={colorRef} name="color" defaultValue={color ?? "Light"}>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
          <option value="Colorful">Colorful</option>
        </select>
      </div>
      <div className={`${styles.row} ${styles.flex2}`}>
        <input ref={titleRef} type="text" placeholder="Title" defaultValue={title} />
        <input ref={emailRef} type="text" placeholder="Email" defaultValue={email} />
      </div>
      <div className={`${styles.row} ${styles.flex1}`}>
        <input ref={messageRef} type="text" placeholder="Message" defaultValue={message} />
      </div>
      <div className={`${styles.row} ${styles.flex2}`}>
        <div className={`${styles.btn} ${photo ? styles.file : styles.noFile}`}>
          {photo ? photo : "No File"}
        </div>
        <div className={`${styles.btn} ${styles.add}`} onClick={data ? onDelete : onAdd}>
          {data ? "Delete" : "Add"}
        </div>
      </div>
    </div>
  );
};
export default InputTable;
