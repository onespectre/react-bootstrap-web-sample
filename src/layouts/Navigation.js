import { Fragment } from 'react' 

import { Navbar, Nav, Container} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
      <>
        <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/">React-Boostrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/index" >Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
          <Outlet></Outlet>
        </section>
      </>
    )
  }
  
  export default Navigation;