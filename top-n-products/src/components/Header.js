// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>
          <Link to="/" style={styles.link}>Top Products</Link>
        </h1>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/products/AMZ/Phone/5/1/5000" style={styles.link}>Phones</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/products/AMZ/Laptop/5/1/10000" style={styles.link}>Laptops</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/products/AMZ/TV/5/1/10000" style={styles.link}>TVs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    margin: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  }
};

export default Header;
