// import logo from './logo.svg';
// import './App.css';
import { blog } from "./Data/blog";
import Footer from "./Footer";
import Header from "./header";
import {Button, Container, Row, Col,Card } from "react-bootstrap";

function App() {
  let headerinfo = {
    name :"rahul",
    email :"rahul@gmail.com",
    phone :"9999999999",
    address :"xyz street, pqr city"

  }
  return (
    <div className="main">
      <Header headerinfo = {headerinfo} />
    
     




      <Container>
        <Row>
          {blog.map((v,i)=>{
            return(
              <ProductItem pitem = {v} key={i}/>

            )
          })}
       
        
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default App;

function ProductItem({pitems}){
  return (
    <Col lg="3" md = "6">
       <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title> {pitems.title} </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>



    </Col>
  )
}