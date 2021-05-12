import {
  Nav,
  Navbar,
  Container,
  Button,
  Image,
  Dropdown,
  NavDropdown,
  Col,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navigation() {
  return (
    <header>
      <Container>
        <Navbar variant="light" expand="md">
          <Navbar.Brand className="pt-3">
            <Link href="/">
              <a>
                <Image
                  src="/logo-ipsum.png"
                  alt="Grouparoo Logo"
                  width={150}
                  height={80}
                />
              </a>
            </Link>
            <span className="d-none">Company</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mt-2">
              <Nav.Link>
                <Link href="/events">
                  <a className="nav-link" role="button">
                    Events
                  </a>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/ menu">
                  <a className="nav-link" role="button">
                    Menu
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/pricing">
                  <a className="nav-link" role="button">
                    Pricing
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/blog">
                  <a className="nav-link" role="button">
                    Blog
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/community">
                  <a className="nav-link d-md-none d-lg-block" role="button">
                    Community
                  </a>
                </Link>
              </Nav.Link>
            </Nav>
            <a
              href="https://github.com/grouparoo/grouparoo"
              target="_blank"
              rel="noreferrer"
              className="col-sm-12 d-md-none d-lg-inline-block col-lg-1 p-0 mx-lg-1 mx-0 mt-2"
            >
              <Button variant="outline-dark" size="sm" className="w-100">
                <FontAwesomeIcon icon={["fab", "github"]} size="xs" /> Star
              </Button>
            </a>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
