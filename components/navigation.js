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
              <NavDropdown
                className="pr-2 py-2 align-text-top"
                title="Events"
                id="basic-nav-dropdown"
              >
                <Container className="eventsNav pt-0 mt-0">
                  <Row>
                    <Col xs="12" md="6" className="text-left">
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"concierge-bell"}
                          size="1x"
                          className="pr-1"
                        />
                        {"  "}
                        Catering
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-link" role="button">
                            Corporate
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-link" role="button">
                            Private
                          </a>
                        </Link>
                      </Dropdown.Item>

                      <Dropdown.Divider />
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"chalkboard-teacher"}
                          size="1x"
                          className="pr-1"
                        />
                        {"  "}
                        Classes
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-link" role="button">
                            Barista 101
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-link" role="button">
                            History of Coffee
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-link" role="button">
                            Intro to Cafe Snobbery
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider className="d-md-none" />
                    </Col>

                    <Col xs="12" md="6" className="text-left">
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"building"}
                          size="1x"
                          className="pr-1"
                        />
                        {"  "}
                        Rentals
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-link" role="button">
                            Fireside Room
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-link" role="button">
                            Roasting Room
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"sun"}
                          size="1x"
                          className="pr-1"
                        />
                        {"  "}
                        Seasonal
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-link" role="button">
                            Coldbrew Night
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-link text-wrap" role="button">
                            Campfire Coffee Class
                          </a>
                        </Link>
                      </Dropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>

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
