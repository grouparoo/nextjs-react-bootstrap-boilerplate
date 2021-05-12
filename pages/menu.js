import { Container, Jumbotron } from "react-bootstrap";

export default function Menu() {
  return (
    <>
      <Container>
        <Jumbotron className="mx-auto mt-5 w-auto text-center">
          <h1>Menu</h1>
          <p>This is the menu page.</p>
        </Jumbotron>
      </Container>
    </>
  );
}
