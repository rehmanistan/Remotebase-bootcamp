import React, { Component } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import AuthenticationService from "../../services/authenticationService";

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    AuthenticationService.signUp(this.state.email, this.state.password).then(
      () => {
        console.log("redirecting");
        this.props.history.push("/");
      },
      (error) => {
        console.log("Signup fail: error = { " + error.toString() + " }");
        this.setState({
          error: "Can't register successfully! Please check email/pwd",
        });
      }
    );
  };

  validate = () => {};

  render() {
    return (
      <div className="off-canvas flex-grow-1">
        <Container fluid="xl" className="app__container">
          <div className="app__container-sm py-5 my-2 my-md-5">
            <h1 className="main__heading text-center mb-4">Sign Up</h1>
            <Form className="pt-4" onSubmit={this.handleSubmit}>
              <Form.Group className="form__field">
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="form__field">
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="form__field">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="form__field">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <div className="text-center mt-5">
                <Button type="submit" className="app__btn app__btn-set">
                  Sign Up
                </Button>
                <p className="md__para mt-3 mb-0">
                  Already have an account?{" "}
                  <a href="signIn" className="app__link">
                    Sign In
                  </a>
                </p>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default RegisterForm;
