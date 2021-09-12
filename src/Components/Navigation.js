import React from 'react';
import { NavLink } from 'react-router-dom';
const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};
const Navigation = () => (
  <nav>
    {/* <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Главная
    </NavLink> */}
        <NavLink
      exact
      to="/register"
     style={styles.link}
      activeStyle={styles.activeLink}
    >
      
      Registration 
    </NavLink>

    <NavLink
      exact
      to="/login"
     style={styles.link}
     activeStyle={styles.activeLink}
    >
      
      Login
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      My contacts
    </NavLink>
  </nav>
);

export default Navigation;