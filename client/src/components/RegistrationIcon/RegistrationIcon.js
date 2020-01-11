import React from "react";
import { ReactComponent as Registration } from "./assets/registration.svg";

import styles from "./RegistrationIcon.module.css";

const RegistrationIcon = () => {
  return (
    <div className={styles.registration}>
      <Registration />
    </div>
  );
};

export default RegistrationIcon;
