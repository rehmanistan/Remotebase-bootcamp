import React, { Component, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import PostScroll from "../components/postScroll";

class Landing extends Component {
  state = {
    posts: [],
    b: "a",
  };

  // componentDidMount() {
  //   axios.get("/").then((res) => this.setState({ posts: res.json }));
  // }

  componentDidMount() {
    axios
      .get("http://localhost:5000")
      .then(function (response) {
        //handle success
        console.log(response.data);
        console.log("1");
      })
      .catch(function (error) {
        //handle error
        console.log(error);
        console.log("1.5");
      })
      .then(function () {
        //always executed
        console.log("2");
      });
  }

  render() {
    console.log("rendering");
    console.log("this.setstate.posts", this.state.posts);
    console.log("test", this.state.b);
    const { posts } = this.state;
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar bg="transparent" expand="md" className="py-3 my-md-2">
          <Container fluid="xl" className="app__container">
            <Navbar.Brand href="#home">Log2o</Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="border-0 p-0"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto d-flex flex-column flex-sm-row justify-content-sm-between mt-3 mt-md-0">
                <Nav.Link
                  href="#home"
                  className="app__btn mb-3 mb-sm-0 mr-sm-3"
                >
                  Sign In
                </Nav.Link>
                <Nav.Link href="#link" className="app__btn">
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
              <PostScroll />
              <PostScroll />
              <PostScroll />
              <PostScroll />
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
