import React from "react";
import {Link} from 'gatsby';

export default function Header(props) {
  return (
    <header>
      <div className="aside">
        {/* Logo */}
        <div className="logo">
          <a href="/" >SthefanoC</a>
        </div>
        {/* Nav Toggler Button */}
        <div className="nav-toggler">
          <span></span>
        </div>
        {/* Nav */}
        <div className="nav">
          <Link as={Link} to="/" className="section-link home-link"><i className="fa fa-home"></i>Home</Link>
          <Link as={Link} to="/about" className="section-link about-link"><i className="fa fa-user"></i>About</Link>
          <Link as={Link} to="/services" className="section-link services-link"><i className="fa fa-list"></i>Services</Link>
          <Link as={Link} to="/projects" className="section-link projects-link"><i className="fa fa-briefcase"></i>Portfolio</Link>
          <Link as={Link} to="/blog" className="section-link blog-link"><i className="fa fa-envelope"></i>Blog</Link>
          <Link as={Link} to="/contact" className="section-link contact-link"><i className="fa fa-comments"></i>Contact</Link>
        </div>
        <div className="copyright-text">
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
        <Link as={Link} to="/"><b className="text-dark">Home</b></Link>
        <Link as={Link} to="/about"><b className="text-dark">About</b></Link>
        <Link as={Link} to="/contact"><b className="text-dark">Contact us</b></Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</header> */}
