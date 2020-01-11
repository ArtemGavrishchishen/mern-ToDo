import React from "react";
import { ReactComponent as Verified } from "./assets/verified.svg";

import styles from "./VerifiedIcon.module.css";

const VerifiedIcon = () => {
  return (
    <div className={styles.verified}>
      <Verified />
    </div>
  );
};

export default VerifiedIcon;
