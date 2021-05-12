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
</NavDropdown>;
