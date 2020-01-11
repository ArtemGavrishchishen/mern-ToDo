import React from "react";
import { ReactComponent as SignOut } from "./assets/sign-out.svg";

import styles from "./SignOutIcon.module.css";

const SignOutIcon = () => {
  return (
    <div className={styles.signOut}>
      <SignOut />
    </div>
  );
};

export default SignOutIcon;
