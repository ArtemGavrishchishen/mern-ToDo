import React from 'react';

import { ReactComponent as Default } from './assets/default.svg';
import { ReactComponent as Girl_1 } from './assets/girl_1.svg';
import { ReactComponent as Girl_2 } from './assets/girl_2.svg';
import { ReactComponent as Man_1 } from './assets/man_1.svg';
import { ReactComponent as Man_2 } from './assets/man_2.svg';
import { ReactComponent as Man_3 } from './assets/man_3.svg';

import styles from './Avatar.module.css';

export const IMAGE = Object.freeze({
  default: Default,
  avatar_1: Girl_1,
  avatar_2: Girl_2,
  avatar_3: Man_1,
  avatar_4: Man_2,
  avatar_5: Man_3
});

const Avatar = ({ img = '' }) => {
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
