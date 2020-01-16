import React from "react";
import { ReactComponent as Setting } from "./assets/setting.svg";

import styles from "./SettingIcon.module.css";

const SettingIcon = () => {
  return (
    <div className={styles.setting}>
      <Setting />
    </div>
  );
};

export default SettingIcon;
