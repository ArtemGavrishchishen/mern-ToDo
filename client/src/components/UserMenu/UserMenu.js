import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback
} from "react";

import AuthContext from "../../context/AuthContext";

import Avatar from "../Avatar";
import DropDown from "../DropDown";

import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const { userName } = useContext(AuthContext);
  const containerRef = useRef();

  const [isDropDownOpen, setDropDown] = useState(false);

  const handleWindowClick = useCallback(
    evt => {
      const isTargetInsideContainer = containerRef.current.contains(evt.target);

      if (isDropDownOpen && !isTargetInsideContainer) {
        closeDropDown();
      }
    },
    [isDropDownOpen]
  );

  const openDropDown = () => {
    setDropDown(true);
  };

  const closeDropDown = () => {
    setDropDown(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [handleWindowClick]);

  return (
    <div className={styles.container} onClick={openDropDown} ref={containerRef}>
      <Avatar img={""} />
      <span className={styles.name}>{userName}</span>
      {isDropDownOpen && <DropDown />}
    </div>
  );
};

export default UserMenu;
