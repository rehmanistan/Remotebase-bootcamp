import React, { Component, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import PostScroll from "../components/postScroll";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000")
      .then((res) => this.setState({ posts: res.data }));
  }

  render() {
    const { posts } = this.state;

    const fetchedPosts = posts.map((post) => (
      <PostScroll
        key={post.id}
        title={post.title}
        content={post.content}
        author={post.author}
        dateCreated={post.dateCreated}
      />
    ));

    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar bg="transparent" expand="md" className="py-3 my-md-2">
          <Container fluid="xl" className="app__container">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="border-0 p-0"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto d-flex flex-column flex-sm-row justify-content-sm-between mt-3 mt-md-0">
                <Nav.Link
                  href="/signIn"
                  className="app__btn mb-3 mb-sm-0 mr-sm-3"
                >
                  Sign In
                </Nav.Link>
                <Nav.Link href="signUp" className="app__btn">
                  Sign Up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="off-canvas flex-grow-1">
          <Container fluid="xl" className="app__container">
            <div className="hero__component text-center position-relative">
              <div className="hero__detail mt-5">
                <h1 className="main__heading mb-4">Blog Shlog</h1>
                <p className="hero__para position-relative">
                  Under Construction: Minions hard at work
                </p>
              </div>
            </div>
            <div className="stories__content app__container-md py-5 my-2 mt-md-4 mb-md-5">
              {fetchedPosts}
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
}
export default Landing;
