import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

import SignOutIcon from "../SignOutIcon";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      {isAuthenticated && (
        <div className={styles.signOut}>
          <SignOutIcon />
        </div>
      )}
    </header>
  );
};

export default AppHeader;
