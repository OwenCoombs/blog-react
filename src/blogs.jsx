import { Link } from "react-router-dom"
import NavBar from "./navbar"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardGroup() {
  return (
    <div id="Blogs">
    <Row id="Blogs" xs={1} md={2} className="g-4">
      {Array.from({ length: 12 }).map((post, index) => (
        <Col key={index}>
          <Card className="border border-dark"id="Blogs">
            
            <Card.Body>
              <Card.Title>Week 1</Card.Title>
              <Card.Text>
                Week 1 blog
              </Card.Text>
            </Card.Body>
            <button>View Full Blog</button>
          </Card>
        </Col>
      ))}
    
    </Row>
  </div>
  );
  
}

function Blogs(){
    return(
    <div>
        <NavBar />
        <CardGroup />
    </div>
    )
}


export default Blogs