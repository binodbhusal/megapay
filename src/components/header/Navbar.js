import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <img src="./megapay.png" width="150px" alt="megapay-logo" />
    <ul>
      <li>
        {' '}
        <Link to="/">Personal</Link>
      </li>

      <li><Link to="/business">Business</Link></li>

    </ul>
  </nav>
);
export default Navbar;
