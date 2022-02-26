import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from './Navbar.module.css';

function MainNavbar() {

    return (
      <div className="mb-3">
        <Navbar collapseOnSelect expand='sm' variant="dark" bg="poland">
          <Container className="m-auto">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className="m-auto">
                <Nav.Link href="/" className="m-auto">Home</Nav.Link>
                <Nav.Link href="/about" className="m-auto">About</Nav.Link>
                <Nav.Link href="/contact" className="m-auto">Contact</Nav.Link>
                <Nav.Link href="/library" className="m-auto">Library</Nav.Link>
                <Nav.Link href="/officer" className="m-auto">Officers</Nav.Link>
                <Nav.Link href="/calendar" className="m-auto">Calendar</Nav.Link>
                <Nav.Link href="/donate" className="m-auto">Donate</Nav.Link>
                <Nav.Link href="/recipe" className="m-auto">Recipes</Nav.Link>
                <Nav.Link href="/join" className="m-auto">Join Now</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
  
  export default MainNavbar;
  