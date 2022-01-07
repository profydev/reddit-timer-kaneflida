import React from 'react';
import styles from './Header.module.css';
import HeaderLogo from '../../Assets/Logo/HeaderLogo.svg';

const Header = () => (
  <div className={styles.Header}>
    <div className={styles.LogoContainer}>
      <img src={HeaderLogo} alt="Header Product Logo" width={150} height={36} />
    </div>
    <div className={styles.NavContainer}>
      <div className={styles.NavItem}>Search</div>
      <div className={styles.NavItem}>How it works</div>
      <div className={styles.NavItem}>About</div>
    </div>
  </div>
);

export default Header;
