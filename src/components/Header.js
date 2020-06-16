import React from "react";
import {Link} from 'gatsby';

class Header extends React.Component {

  componentDidMount() {
    console.log("There is a Header component on this page.");
    // Testing if the page is working
    const logoTest = document.querySelector(".logo");
    if(logoTest){
        logoTest.addEventListener("mouseenter",() => {
            console.log('Header component!');
    })
    };

    // Nav bar toggler button
    const navTogglerBtn=document.querySelector(".nav-toggler");
    const aside=document.querySelector(".aside");

    if(navTogglerBtn){
        navTogglerBtn.addEventListener("click",() => {
            asideSectionTogglerBtn();
    })
    };

    const asideSectionTogglerBtn = function (){
        const sectionList=document.querySelectorAll(".section");
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0;i<sectionList.length;i++){
            sectionList[i].classList.toggle("open");
        }
    };

    // Highlighting current section
    const highlightCurrentPage = async () => {
      await new Promise((resolve)=>setTimeout(() => {
          try {
            let currentPage='';
            if(window.location.pathname !== "/"){
                currentPage = window.location.pathname.split("/")[1]
            } else {
                currentPage = "home";
            };
            const currentPageClass = currentPage + "-link";
            document.getElementsByClassName(currentPageClass)[0].setAttribute("aria-current", "page");
            
          } catch {
            document.getElementsByClassName('home-link')[0].setAttribute("aria-current", "page");
          }
          resolve();
      }, 500)); 
    };
    highlightCurrentPage();
  }

  render() {

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
}

export default Header;
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
