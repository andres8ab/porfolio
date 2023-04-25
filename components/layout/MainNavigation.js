import Link from "next/link";
import Image from "next/legacy/image";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MainNavigation = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/img/AOlogo.png"
            alt="Logo Andres Ochoa"
            width="100"
            height="100"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-semibold">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
