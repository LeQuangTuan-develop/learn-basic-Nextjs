import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Wolfhybrid</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link href="/posts" passHref>
            <Nav.Link>Post</Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
          <Link href="/jokes/random" passHref>
            <Nav.Link>Jokes</Nav.Link>
          </Link>
          <Link href="/books" passHref>
            <Nav.Link>Books</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
