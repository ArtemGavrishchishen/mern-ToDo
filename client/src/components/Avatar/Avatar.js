import React from "react";

import { ReactComponent as Default } from "./assets/default.svg";
import { ReactComponent as Girl_1 } from "./assets/girl_1.svg";
import { ReactComponent as Girl_2 } from "./assets/girl_2.svg";
import { ReactComponent as Man_1 } from "./assets/man_1.svg";
import { ReactComponent as Man_2 } from "./assets/man_2.svg";
import { ReactComponent as Man_3 } from "./assets/man_3.svg";

import styles from "./Avatar.module.css";

const IMAGE = Object.freeze({
  default: Default,
  girl_1: Girl_1,
  girl_2: Girl_2,
  man_1: Man_1,
  man_2: Man_2,
  man_3: Man_3
});

const Avatar = ({ img = "" }) => {
  let SrcAvatar = IMAGE.default;

  for (let key in IMAGE) {
    if (key === img) {
      SrcAvatar = IMAGE[key];
    }
  }

  return (
    <div className={styles.avatar}>
      <SrcAvatar />
    </div>
  );
};

export default Avatar;
