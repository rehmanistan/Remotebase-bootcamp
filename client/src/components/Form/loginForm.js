import React, { Component } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import AuthenticationService from "../../services/authenticationService";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
    };

    // why are these needed?
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    AuthenticationService.signIn(this.state.email, this.state.password).then(
      () => {
        console.log("redirecting");
        this.props.history.push("/");
      },
      (error) => {
        console.log("Login fail: error = { " + error.toString() + " }");
        this.setState({
          error: "Can't sign in successfully! Please check email/pwd",
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
            <h1 className="main__heading text-center mb-4">Sign In</h1>
            <Form className="pt-4" onSubmit={this.handleSubmit}>
              <Form.Group className="form__field">
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="form__field">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <div className="form__option d-flex justify-content-end align-items-center pt-3">
                <span className="form__trouble d-inline-flex mr-3">
                  Trouble logging in?
                </span>
                <a href="#" className="app__link">
                  Reset my password
                </a>
              </div>
              <div className="text-center mt-5">
                <Button type="submit" className="app__btn app__btn-set">
                  Sign In
                </Button>
                <p className="md__para mt-3 mb-0">
                  Don't have an account?{" "}
                  <a href="signUp" className="app__link">
                    Sign Up
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

export default LoginForm;
