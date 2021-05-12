import { Container, Jumbotron } from "react-bootstrap";

export default function Blog() {
  return (
    <>
      <Container>
        <Jumbotron className="mx-auto mt-5 w-auto text-center">
          <h1>Blog</h1>
          <p>This is the blog page.</p>
        </Jumbotron>
      </Container>
    </>
  );
}
