import React from "react";
import { ReactComponent as SignIn } from "./assets/sign-in.svg";

import styles from "./SignInIcon.module.css";

const SignInIcon = () => {
  return (
    <div className={styles.signIn}>
      <SignIn />
    </div>
  );
};

export default SignInIcon;
