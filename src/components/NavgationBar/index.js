import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavgationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Shop</Nav.Link>
            <Nav.Link href="#action3">Features</Nav.Link>
            <Nav.Link href="#action4">LookBook</Nav.Link>
            <Nav.Link href="#action5">Pages</Nav.Link>
            <Nav.Link href="#action6">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavgationBar;

// navbar dropdown item example
{
  /* <NavDropdown title="Link" id="navbarScrollingDropdown">
<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
<NavDropdown.Item href="#action4">
  Another action
</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action5">
  Something else here
</NavDropdown.Item>
</NavDropdown> */
}

/* https://react-bootstrap.github.io/components/alerts  => bootstrap componentleri   */
