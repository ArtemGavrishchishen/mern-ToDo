import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback
} from 'react';

import useHttp from '../../hooks/http.hook';
import AuthContext from '../../context/AuthContext';

import Avatar from '../Avatar';
import DropDown from '../DropDown';

import styles from './UserMenu.module.css';

const UserMenu = () => {
  const { token } = useContext(AuthContext);
  const { request } = useHttp();
  const containerRef = useRef();

  const [isDropDownOpen, setDropDown] = useState(false);
  const [user, setUser] = useState({ avatar: '', name: '', surname: '' });

  const fetchUser = useCallback(async () => {
    try {
      const fatched = await request('/user', 'GET', null, {
        Authorization: `Bearer ${token}`
      });

      setUser({
        avatar: fatched.avatar,
        name: fatched.name,
        surname: fatched.surname
      });
    } catch (e) {
      console.log(e);
    }
  }, [token, request]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

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
    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [handleWindowClick]);

  return (
    <div className={styles.container} onClick={openDropDown} ref={containerRef}>
      <Avatar img={user.avatar} />
      <span className={styles.name}>{`${user.name} ${user.surname}`}</span>
      {isDropDownOpen && <DropDown />}
    </div>
  );
};

export default UserMenu;
