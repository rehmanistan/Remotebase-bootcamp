import React, { Component, useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import RegisterForm from "../components/Form/registerForm";

class signUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar bg="transparent" expand="md" className="py-3 my-md-2">
          <Container fluid="xl" className="app__container">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
          </Container>
        </Navbar>
        <RegisterForm history={this.props.history} />
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
}

export default signUp;
