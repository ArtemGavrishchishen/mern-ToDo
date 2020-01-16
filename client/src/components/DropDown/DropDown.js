import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import SettingIcon from "../SettingIcon";
import SignOutIcon from "../SignOutIcon";

import AuthContext from "../../context/AuthContext";
import routes from "../../configs/routes";

import styles from "./DropDown.module.css";

const DropDown = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = e => {
    e.preventDefault();
    logout();
    history.push(routes.AUTH);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to={routes.SETTINGS}>
            <SettingIcon />
            <span className={styles.span}>Settings</span>
          </Link>
        </li>
        <li>
          <button type="button" className={styles.btn} onClick={logoutHandler}>
            <SignOutIcon />
            <span className={styles.span}>LogOut</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
