import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'gatsby';


export default function Header(props) {
  return (
    <header>
      <div class="aside">
        {/* Logo */}
        <div class="logo">
          <a href="/" >SthefanoC</a>
        </div>
        {/* Nav Toggler Button */}
        <div class="nav-toggler">
          <span></span>
        </div>
        {/* Nav */}
        <div class="nav">
          <Nav.Link as={Link} to="/" className="fa fa-home"> Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="fa fa-user"> About</Nav.Link>
          <Nav.Link as={Link} to="/services" className="fa fa-list"> Services</Nav.Link>
          <Nav.Link as={Link} to="/portfolio" className="fa fa-briefcase"> Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/blog" className="fa fa-envelope"> Blog</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="fa fa-comments"> Contact</Nav.Link>
        </div>
        <div class="copyright-text">
          Powered by <a href="https://masteradin.com/">Masteradin</a>
        </div>
      </div>
    </header>
)}

{/* <header>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Crazy Gatsby</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/"><b className="text-dark">Home</b></Nav.Link>
        <Nav.Link as={Link} to="/about"><b className="text-dark">About</b></Nav.Link>
        <Nav.Link as={Link} to="/contact"><b className="text-dark">Contact us</b></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</header> */}
