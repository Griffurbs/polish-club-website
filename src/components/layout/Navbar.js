import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from './Navbar.module.css';

function MainNavbar() {

    return (
      <div>
        {/* <ul className={classes.navbarlist}>
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
        </ul> */}
        <Container>
          
          <Navbar>
            <Nav className="m-auto">
              <Nav.Link href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/about">
                About
              </Nav.Link>
              <Nav.Link href="/contact">
                Contact
              </Nav.Link>
              <Nav.Link href="/library">
                Library
              </Nav.Link>
              <Nav.Link href="/officer">
                Officers
              </Nav.Link>
              <Nav.Link href="/calendar">
                Calendar
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
  }
  
  export default MainNavbar;
  