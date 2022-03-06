import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

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
                <Nav.Link href="/donate" className="m-auto">Donate</Nav.Link>
                <Nav.Link href="/officer" className="m-auto">Officers</Nav.Link>
                <Nav.Link href="/contact" className="m-auto">Contact Us</Nav.Link>
                <NavDropdown title="Library" className="m-auto" id="navbarLibraryDropdown" width="100%">
                  <NavDropdown.Item href="/library" className="m-auto" width="100%">Videos</NavDropdown.Item>
                  <NavDropdown.Item href="/books" className="m-auto" width="100%">Books</NavDropdown.Item>
                  <NavDropdown.Item href="/recipe" className="m-auto" width="100%">Recipes</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/calendar" className="m-auto">Calendar</Nav.Link>
                <Nav.Link href="/join" className="m-auto">Join Now</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
  
  export default MainNavbar;
  