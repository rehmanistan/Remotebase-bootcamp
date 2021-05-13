import React, { Component, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import PostList from "../components/PostList";

import AuthService from "../services/authenticationService";
import PostService from "../services/postService";
import UserService from "../services/userService";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: undefined,
      posts: [],
      loading: true,
    };

    this.signout = this.signOut.bind(this);
  }

  componentDidMount() {
    PostService.getPosts().then(
      (response) => {
        this.setState({
          posts: response,
          loading: false,
        });
      },
      (error) => {
        console.log(error);
      }
    );

    const allPosts = PostService.getPosts();
    if (allPosts) {
      this.setState({
        posts: allPosts,
      });
    }

    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  signOut() {
    AuthService.signOut();
    this.setState({ currentUser: null });
  }

  render() {
    const { loading, currentUser, posts } = this.state;

    // if (!posts) {
    //   return <div>Loading...</div>;
    // }

    // let fetchedPosts;

    // fetchedPosts = posts.map((post) => (
    //   <PostScroll
    //     key={post.id}
    //     title={post.title}
    //     content={post.content}
    //     author={post.author}
    //     dateCreated={post.dateCreated}
    //   />
    // ));

    return (
      <div className="d-flex flex-column min-vh-100">
        {currentUser ? (
          <Navbar bg="transparent" expand="md" className="py-3 my-md-2">
            <Container fluid="xl" className="app__container">
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="border-0 p-0"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto d-flex flex-column flex-sm-row justify-content-sm-between mt-3 mt-md-0">
                  <Nav.Link
                    href="/createPost"
                    className="app__btn mb-3 mb-sm-0 mr-sm-3"
                  >
                    Create Post
                  </Nav.Link>

                  <Nav.Link
                    href="/"
                    className="app__btn"
                    onClick={this.signOut}
                  >
                    Sign Out
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        ) : (
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
                  <Nav.Link href="/signup" className="app__btn">
                    Sign Up
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}

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
              {loading ? "loading2" : <PostList posts={posts} />}
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
