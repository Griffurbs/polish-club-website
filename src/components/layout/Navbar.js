import { Link } from "react-router-dom";

import classes from './Navbar.module.css';

function Navbar() {

    return (
      <div className="navbar">
        <ul className={classes.navbarlist}>
          <li className={classes.navitem}>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.navitem}>
            <Link to="/about">About</Link>
          </li>
          <li className={classes.navitem}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={classes.navitem}>
            <Link to="/library">Videos</Link>
          </li>
          <li className={classes.navitem}>
            <Link to="/officer">Officers</Link>
          </li>
          <li className={classes.navitem}>
            <Link to="/calendar">Calendar</Link>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  