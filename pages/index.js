import Head from "next/head";
import {
  Jumbotron,
  Button,
  Container,
  Image,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "../components/icons";

export default function Home() {
  return (
    <>
      <Head></Head>

      <main>
        <Image src="/coffee-brewing.jpeg" fluid />
        <Jumbotron className="col-8 mt-5 mx-auto">
          <h1>Hello, coffee!</h1>
          <p>
            Arabica Acerbic Affogato Aftertaste Aged Americano And Aroma shot,
            Beans strong robust flavour wings kopi-luwak black sit, brewed
            siphon At acerbic cream irish mazagran.{" "}
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Container>
          <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3">
            <Col className="mb-4">
              <Card className="py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>Single Shot Dark Macchiato</Card.Title>
                  Grouparoo is open source and free to run in on your own cloud.
                  <br />
                  <br />
                  <p>
                    Dripper acerbic fair trade cream to go percolator breve.
                    Half and half breve steamed variety extra cinnamon single
                    origin viennese sugar decaffeinated extraction milk. Beans,
                    at, beans mocha a latte at sweet. Cultivar cream, milk
                    decaffeinated and caramelization, black sit acerbic as iced.
                  </p>
                </Card.Body>
                <Button variant="primary" className="col-4 mx-auto" href="/">
                  {" "}
                  Sign Up
                </Button>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card className="pricingCard py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>crema dark et french press</Card.Title>
                  Cream arabica strong wings eu milk that breve. <br />
                  <br />
                  <p>
                    Cappuccino Con kopi-luwak grinder extraction grounds coffee
                    ut rich chicory, spice black mocha viennese so au half
                    espresso siphon Body, Americano percolator Aftertaste
                    Cappuccino lungo sweet Bar aromatic.
                  </p>
                </Card.Body>
                <Button variant="primary" className="col-4 mx-auto" href="/">
                  Get a quote
                </Button>
              </Card>
            </Col>
            <Col className="mb-4 offset-md-3 offset-xl-0">
              <Card className="pricingCard py-5 shadow-lg h-100 ">
                <Card.Body>
                  <Card.Title>
                    Percolator at froth half decaffeinated
                  </Card.Title>
                  <p>
                    Sweet medium latte and Cappuccino, Aroma grounds Con
                    Aftertaste in mountain iced cup trade cappuccino, french
                    black so turkish siphon skinny extra that. Kopi-luwak robust
                    extra macchiato beans dark black, aromatic trade medium java
                    sugar, shot wings turkish mazagran spoon. Percolator
                  </p>
                </Card.Body>
                <Button variant="primary" className="col-4 mx-auto" href="/">
                  {" "}
                  Learn More
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="parallax paralsec" />
        <Container>
          <div className="mt-3 p-3 mx-auto">
            <h2>Cafe au Lait</h2>
            <p>
              Foam iced single origin, instant crema sit in acerbic robusta.
              Saucer, frappuccino café au lait fair trade mocha café au lait
              skinny. Black, est cup aftertaste cream roast a as strong barista.
              White so, acerbic redeye, doppio chicory affogato, shop cortado
              coffee wings viennese. French press cappuccino single origin
              dripper qui frappuccino decaffeinated.
            </p>

            <p>
              Strong sweet filter cup grounds, americano robust caffeine to go
              lungo body. Froth ristretto that dark acerbic plunger pot a medium
              half and half. Instant cinnamon grinder et decaffeinated ut
              carajillo frappuccino. Whipped organic chicory café au lait
              cappuccino cortado whipped. Aftertaste, organic, a, extraction
              aftertaste, doppio, sugar variety cortado at froth aged.
            </p>

            <p>
              Grounds lungo, bar cup so a foam. Fair trade con panna id variety
              mocha trifecta brewed kopi-luwak pumpkin spice brewed beans. Aged,
              aroma, chicory, decaffeinated breve, percolator organic and extra
              body. Fair trade half and half macchiato cultivar et sit in
              cappuccino. Dark beans, caffeine variety grinder rich redeye
              acerbic.
            </p>
          </div>
        </Container>
      </main>
      <footer className="footer mt-auto mx-auto py-3 bg-light">
        <div className="container text-center">
          <span className="text-muted text-center">
            2021 React Bootstrap/NextJS Boilerplate -- Teal Larson
          </span>
        </div>
      </footer>
    </>
  );
}
