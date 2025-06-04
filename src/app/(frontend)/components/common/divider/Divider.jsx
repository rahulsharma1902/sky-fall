import React from "react";
import styles from "./divider.module.css";

const Divider = ({ margin = false }) => {
  return (
    <div
      className={`${styles.solidBr} ${
        margin ? "mt-3 	d-block d-sm-none" : "mt-5"
      }`}
    ></div>
  );
};

export default Divider;
