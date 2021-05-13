import React, { Component, useState } from "react";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";

import PostService from "../services/postService";
import AuthService from "../services/authenticationService";

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      error: "",
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      this.setState({
        author: currentUser,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { title, content, author } = this.state;

    await PostService.createPost(title, content, author.newUser._id).then(
      () => {
        this.props.history.push("/");
      },
      (error) => {
        console.log("post creation failed: error = {" + error.toString() + ")");
        this.setState({
          error: "Couldn't create post successfully",
        });
      }
    );
  };

  validate = () => {};

  render() {
    const currentUser = AuthService.getCurrentUser();
    return (
      <>
        {currentUser ? (
          <div className="d-flex flex-column min-vh-100">
            <Navbar bg="transparent" expand="md" className="py-3 my-md-2">
              <Container fluid="xl" className="app__container">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="border-0 p-0"
                />
              </Container>
            </Navbar>

            <div className="off-canvas flex-grow-1">
              <Container fluid="xl" className="app__container">
                <div className="app__container-md py-5 my-2 my-md-5">
                  <Form className="pt-4" onSubmit={this.handleSubmit}>
                    <Form.Group className="form__field">
                      <Form.Control
                        type="text"
                        name="title"
                        placeholder="Give your post a creative title!"
                        value={this.state.title}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="form__field">
                      <Form.Control
                        type="text"
                        name="content"
                        placeholder="Express yourself!"
                        value={this.state.content}
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <div className="text-center mt-5">
                      <Button type="submit" className="app__btn app__btn-set">
                        Submit Post
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
        ) : (
          "Please log in"
        )}
      </>
    );
  }
}

export default NewPost;
