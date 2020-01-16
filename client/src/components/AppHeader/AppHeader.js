import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import routes from "../../configs/routes";

import UserMenu from "../UserMenu";
import RegistrationIcon from "../RegistrationIcon";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      {isAuthenticated && (
        <div className={styles.userMenu}>
          <UserMenu />
        </div>
      )}
      {!isAuthenticated && (
        <div className={styles.userMenu}>
          <Link to={routes.REGISTRATION}>
            <RegistrationIcon />
          </Link>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
