import { Link } from "react-router-dom";

import classes from './Navbar.module.css';

function Navbar() {

    return (
      <div className="navbar">
        <ul className={classes.navbarlist}>
          <li className={classes.navitem}>
            <Link to="/">About Us</Link>
          </li>
          <li className={classes.navitem}>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className={classes.navitem}>
            <Link to="/library">Video Library</Link>
          </li>
          <li className={classes.navitem}>
            <Link to="/officer">Officer Info</Link>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  