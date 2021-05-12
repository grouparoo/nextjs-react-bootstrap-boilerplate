import { Container, Jumbotron } from "react-bootstrap";

export default function Events() {
  return (
    <>
      <Container>
        <Jumbotron className="mx-auto mt-5 w-auto text-center">
          <h1>Events</h1>
          <p>This is the events page.</p>
        </Jumbotron>
      </Container>
    </>
  );
}
