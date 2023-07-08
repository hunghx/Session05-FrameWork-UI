import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";

export const Session01 = () => {
  return (
    <div>
      {/* heades */}
      <Navbar expand="lg" className="bg-primary px-4" >
        <Container>
          <Navbar.Brand href="#home">Example Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* heades */}
      {/* content */}
      <Container className="m-5">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://tse3.mm.bing.net/th?id=OIP.pU0SANNcVp4i9fKR7dkzuQHaFR&pid=Api&P=0&h=180"
              />
              <Card.Body>
                <Card.Title>Example Card</Card.Title>
                <Card.Text>This is an example card.</Card.Text>
                <Button variant="primary">Example Button</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://tse3.mm.bing.net/th?id=OIP.pU0SANNcVp4i9fKR7dkzuQHaFR&pid=Api&P=0&h=180"
              />
              <Card.Body>
                <Card.Title>Example Card</Card.Title>
                <Card.Text>This is an example card.</Card.Text>
                <Button variant="primary">Example Button</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://tse3.mm.bing.net/th?id=OIP.pU0SANNcVp4i9fKR7dkzuQHaFR&pid=Api&P=0&h=180"
              />
              <Card.Body>
                <Card.Title>Example Card</Card.Title>
                <Card.Text>This is an example card.</Card.Text>
                <Button variant="primary">Example Button</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* content */}
      {/* footer */}
      <footer style={{background:"#4863A0"}} className="p-4">
        <Container >
            <Row><p className="text-center text-light">Thanks you for visit my website</p></Row>
            <Row><p className="text-center text-light">Contact me</p></Row>
            <Row>
                <Col><Button variant="link">Instagram</Button></Col>
                <Col><Button variant="link">FaceBook</Button></Col>
                <Col><Button variant="link">Twitter</Button></Col>
            </Row>
        </Container>
    </footer>
    </div>
    
  );
};
