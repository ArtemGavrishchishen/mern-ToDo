import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import routes from "../../configs/routes";

import SignOutIcon from "../SignOutIcon";
import RegistrationIcon from "../RegistrationIcon";
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
      {!isAuthenticated && (
        <div className={styles.signOut}>
          <Link to={routes.REGISTRATION}>
            <RegistrationIcon />
          </Link>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
