import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,

} from "react-bootstrap";


function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="transparent" expand="md" className="py-3 my-md-2">
        <Container fluid="xl" className="app__container">
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="off-canvas flex-grow-1">
        <Container fluid="xl" className="app__container">
          <div className="app__container-sm py-5 my-2 my-md-5">
            <h1 className="main__heading text-center mb-4">
              Trouble logging in?
            </h1>
            <Form className="pt-4">
              <Form.Group className="form__field">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <div className="text-center mt-5">
                <Button type="submit" className="app__btn app__btn-set">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
      <footer className="bg-white py-4">
        <Container fluid="xl" className="app__container">
          <p className="footer__para mb-0 text-center">
            © Copyrights reserved by Remotebase
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
