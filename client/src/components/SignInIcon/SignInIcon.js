import React from "react";
import { ReactComponent as SignIn } from "./assets/sign-in.svg";

import styles from "./SignInIcon.module.css";

const SignInIcon = () => {
  return (
    <button type="submit" className={styles.signIn}>
      <SignIn />
    </button>
  );
};

export default SignInIcon;
