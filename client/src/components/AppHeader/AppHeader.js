import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import routes from "../../configs/routes";

import SignOutIcon from "../SignOutIcon";
import RegistrationIcon from "../RegistrationIcon";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = e => {
    e.preventDefault();
    logout();
    history.push(routes.AUTH);
  };

  return (
    <header className={styles.header}>
      {isAuthenticated && (
        <div className={styles.signOut}>
          <button type="button" className={styles.btn} onClick={logoutHandler}>
            <SignOutIcon />
          </button>
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
