import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,

} from "react-bootstrap";


function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="transparent" expand="md" className="py-3 my-md-2">
        <Container fluid="xl" className="app__container">
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 p-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex flex-column flex-sm-row justify-content-sm-between mt-3 mt-md-0">
              <Nav.Link href="#home" className="app__btn mb-3 mb-sm-0 mr-sm-3">Sign In</Nav.Link>
              <Nav.Link href="#link" className="app__btn">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="off-canvas flex-grow-1">
        <Container fluid="xl" className="app__container">
          <div className="hero__component text-center position-relative">
            <div className="hero__detail mt-5">
              <h1 className="main__heading mb-4">
                Tell Your Story to the World
              </h1>
              <p className="hero__para position-relative">
                Join with us! Login or Register. Write your story and share !!
              </p>
            </div>
          </div>
          <div className="stories__content app__container-md py-5 my-2 mt-md-4 mb-md-5">
            <div className="stories__block bg-white">
              <div className="stories__img d-flex align-items-center justify-content-center flex-shrink-0">
                <img src="/images/stories-img.png" alt="Img" className="w-100 h-100" />
              </div>
              <div className="stories__detail">
                <h3 className="stories__block-heading mb-3 pb-1">Dashboard</h3>
                <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-center mb-3">
                  <a href="#" className="app__link d-inline-flex mr-1">by demo</a>
                  <span className="stories__date">/ 3/24/21, 1:40 PM</span>
                </div>
                <p className="clamp-3 md__para mb-3 mb-sm-2">
                  a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo tak joooo a tak joooo a tak joooo a tak joooo tak joooo a tak joooo a tak joooo tak joooo a tak joooo a tak joooo 
                </p>
                <div className="text-right">
                  <a className="app__link d-inline-flex">Read More</a>
                </div>
              </div>
            </div>
            <div className="stories__block bg-white">
              <div className="stories__img d-flex align-items-center justify-content-center flex-shrink-0">
                <img src="/images/stories-img.png" alt="Img" className="w-100 h-100" />
              </div>
              <div className="stories__detail">
                <h3 className="stories__block-heading mb-3 pb-1">Dashboard</h3>
                <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-center mb-3">
                  <a href="#" className="app__link d-inline-flex mr-1">by demo</a>
                  <span className="stories__date">/ 3/24/21, 1:40 PM</span>
                </div>
                <p className="clamp-3 md__para mb-3 mb-sm-2">
                  a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo tak joooo a tak joooo a tak joooo a tak joooo tak joooo a tak joooo a tak joooo tak joooo a tak joooo a tak joooo 
                </p>
                <div className="text-right">
                  <a className="app__link d-inline-flex">Read More</a>
                </div>
              </div>
            </div>
            <div className="stories__block bg-white">
              <div className="stories__img d-flex align-items-center justify-content-center flex-shrink-0">
                <img src="/images/stories-img.png" alt="Img" className="w-100 h-100" />
              </div>
              <div className="stories__detail">
                <h3 className="stories__block-heading mb-3 pb-1">Dashboard</h3>
                <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-center mb-3">
                  <a href="#" className="app__link d-inline-flex mr-1">by demo</a>
                  <span className="stories__date">/ 3/24/21, 1:40 PM</span>
                </div>
                <p className="clamp-3 md__para mb-3 mb-sm-2">
                  a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo tak joooo a tak joooo a tak joooo a tak joooo tak joooo a tak joooo a tak joooo tak joooo a tak joooo a tak joooo 
                </p>
                <div className="text-right">
                  <a className="app__link d-inline-flex">Read More</a>
                </div>
              </div>
            </div>
            <div className="stories__block bg-white">
              <div className="stories__img d-flex align-items-center justify-content-center flex-shrink-0">
                <img src="/images/stories-img.png" alt="Img" className="w-100 h-100" />
              </div>
              <div className="stories__detail">
                <h3 className="stories__block-heading mb-3 pb-1">Dashboard</h3>
                <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-center mb-3">
                  <a href="#" className="app__link d-inline-flex mr-1">by demo</a>
                  <span className="stories__date">/ 3/24/21, 1:40 PM</span>
                </div>
                <p className="clamp-3 md__para mb-3 mb-sm-2">
                  a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo a tak joooo tak joooo a tak joooo a tak joooo a tak joooo tak joooo a tak joooo a tak joooo tak joooo a tak joooo a tak joooo 
                </p>
                <div className="text-right">
                  <a className="app__link d-inline-flex">Read More</a>
                </div>
              </div>
            </div>
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
