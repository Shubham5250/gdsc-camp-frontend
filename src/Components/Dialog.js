import React from "react";
import styles from "../Styles/components/Dialog.module.css";

const Dialog = ({ openDialog, setOpenDialog, title, children }) => {
  return (
    <div
      className={
        openDialog ? `${styles.dialog} ${styles.opened}` : styles.dialog
      }
    ></div>
  );
};

export default Dialog;
