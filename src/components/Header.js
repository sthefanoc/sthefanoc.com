import React from "react";
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
          <Link as={Link} to="/" className=""><i class="fa fa-home"></i>Home</Link>
          <Link as={Link} to="/about" className=""><i class="fa fa-user"></i>About</Link>
          <Link as={Link} to="/services" className=""><i class="fa fa-list"></i>Services</Link>
          <Link as={Link} to="/projects" className=""><i class="fa fa-briefcase"></i>Portfolio</Link>
          <Link as={Link} to="/blog" className=""><i class="fa fa-envelope"></i>Blog</Link>
          <Link as={Link} to="/contact" className=""><i class="fa fa-comments"></i>Contact</Link>
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
        <Link as={Link} to="/"><b className="text-dark">Home</b></Link>
        <Link as={Link} to="/about"><b className="text-dark">About</b></Link>
        <Link as={Link} to="/contact"><b className="text-dark">Contact us</b></Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</header> */}
