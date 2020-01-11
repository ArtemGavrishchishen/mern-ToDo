import React from "react";
import { ReactComponent as Remove } from "./assets/remove.svg";

import styles from "./RemoveIcon.module.css";

const RemoveIcon = () => {
  return (
    <div className={styles.remove}>
      <Remove />
    </div>
  );
};

export default RemoveIcon;
