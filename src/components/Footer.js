import React from "react";
import footerStyles from './Footer.module.css';
import { Link } from 'gatsby';

const Footer = () => {
  function setActiveStyle(color){
    console.log(color);
  }
  return (
    <div>
      {/* Live style switcher */}
        <div class="style-switcher">
          <div class="toggle-style-switcher">
            <i class="fa fa-cog fa-spin"></i>
          </div>
          <h5>Style Switcher</h5>
          <ul>
            <li><a href="javascript:void(0);" title="pink" style={{backgroundColor: "#ec1839"}} onclick={setActiveStyle('pink')}></a></li>
            <li><a href="javascript:void(0);" title="blue" style={{backgroundColor: "#2196f3"}} onclick={setActiveStyle('blue')}></a></li>
            <li><a href="javascript:void(0);" title="orange" style={{backgroundColor: "#fa5b0f"}} onclick={setActiveStyle('orange')}></a></li>
            <li><a href="javascript:void(0);" title="yellow" style={{backgroundColor: "#ffb400"}} onclick={setActiveStyle('yellow')}></a></li>
            <li><a href="javascript:void(0);" title="green" style={{backgroundColor: "#72b626"}} onclick={setActiveStyle('green')}></a></li>
          </ul>
          <h5>Body Skin</h5>
          <label >
            <input type="radio" class="body-skin" name="body-style" value="light" checked="true" />
            Light
          </label>
          <label >
            <input type="radio" class="body-skin" name="body-style" value="dark" />
            Dark
          </label>
        </div>
    </div>
   )
}

export default Footer;