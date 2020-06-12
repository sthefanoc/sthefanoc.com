import React from "react";
import footerStyles from './Footer.module.css';


const Footer = () => {
  return (
    <div>
        {/* <!-- Lightbox start --> */}
        <div className="lightbox">
          <div className="lightbox-content">
            <div className="lightbox-close">&times;</div>
            <img src="images/portfolio/1.jpg" alt="Name of The Project" className="lightbox-img next-item" />
            <div className="lightbox-caption">
              <div className="caption-text">Project # 1</div>
              <div className="caption-counter">1 of 6</div>
            </div>
          </div>
          <div className="lightbox-controls">
            <div className="prev-item" ><i className="fa fa-angle-left"></i></div>
            <div className="next-item" ><i className="fa fa-angle-right"></i></div>
          </div>
        </div>
        {/* <!-- Lightbox end --></div> */}
        {/* Live style switcher */}
        <div className="style-switcher">
          <div className="toggle-style-switcher">
            <i className="fa fa-cog fa-spin"></i>
          </div>
          <h5>Style Switcher</h5>
          <ul>
            <li><a href="#" title="pink" style={{backgroundColor: "#ec1839"}} ></a></li>
            <li><a href="#" title="blue" style={{backgroundColor: "#2196f3"}} ></a></li>
            <li><a href="#" title="orange" style={{backgroundColor: "#fa5b0f"}} ></a></li>
            <li><a href="#" title="yellow" style={{backgroundColor: "#ffb400"}} ></a></li>
            <li><a href="#" title="green" style={{backgroundColor: "#72b626"}} ></a></li>
          </ul>
          <h5>Body Skin</h5>
          <label >
            <input type="radio" className="body-skin" name="body-style" value="light" defaultChecked="true" />
            Light
          </label>
          <label >
            <input type="radio" className="body-skin" name="body-style" value="dark" />
            Dark
          </label>
        </div>
    </div>
   )
}

export default Footer;