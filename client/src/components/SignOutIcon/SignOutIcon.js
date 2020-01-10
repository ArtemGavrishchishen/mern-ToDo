import React from "react";
import { ReactComponent as SignOut } from "./assets/sign-out.svg";

import styles from "./SignOutIcon.module.css";

const SignOutIcon = () => {
  return (
    <button type="button" className={styles.signOut}>
      <SignOut />
    </button>
  );
};

export default SignOutIcon;
