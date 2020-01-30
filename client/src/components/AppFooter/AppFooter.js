import React from "react";

import styles from "./AppFooter.module.css";

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <span>Made by </span>
        <a
          target="_blank"
          href=" https://www.linkedin.com/in/artem-gavrishchishen-6a3040183/  "
        >
          Artem Gavrishchishen
        </a>
      </div>
    </footer>
  );
};

export default AppFooter;
