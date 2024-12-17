// import logo from './logo.svg';
// import './App.css';
import Footer from "./Footer";
import Header from "./header";
import {Button, Container, Row, Col,Card } from "react-bootstrap";

function App() {
  return (
    <div className="main">
      <Header />

      <Container>
        <Container>
          <Row>
            <Col className="col-12" text-center py-4>
              
              <h1>Welcome to WS </h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md-6>
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              
            </Col>

            <Col lg="3" md-6>
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              
            </Col>
            <Col lg="3" md-6>
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              
            </Col>
            <Col lg="3" md-6>
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              
            </Col>
            
            
          </Row>
        </Container>
      </Container>

      <Footer />
    </div>
  );
}

export default App;

