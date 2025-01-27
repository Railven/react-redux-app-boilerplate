import React from 'react';
import { Link } from 'react-router-dom';
// Components
import NavBar from 'components/NavBar/NavBar';
// Styles
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <Link className={styles.logoBlock} to="/">
        <span className={styles.logo}>
            <i className="fa fa-gears"></i>
        </span>
      <span className={styles.name}>React Redux App</span>
    </Link>
    <NavBar/>
  </header>);

export default Header;
