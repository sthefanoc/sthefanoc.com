import React from "react";
import { withPrefix } from 'gatsby';
import footerStyles from './Footer.module.css';
import templateScript from '../../static/js/script';
import styleSwitcherScript from '../../static/js/styleSwitcher';

const Footer = () => {
  return (
    <div>
      {/* Live style switcher */}
        <div class="style-switcher">
          <div class="toggle-style-switcher">
            <i class="fa fa-cog fa-spin"></i>
          </div>
          <h5>Style Switcher</h5>
          <ul>
            <li><a href="javascript:void(0);" title="pink" style="background-color: #ec1839;" onclick="setActiveStyle('pink')"></a></li>
            <li><a href="javascript:void(0);" title="blue" style="background-color: #2196f3;" onclick="setActiveStyle('blue')"></a></li>
            <li><a href="javascript:void(0);" title="orange" style="background-color: #fa5b0f;" onclick="setActiveStyle('orange')"></a></li>
            <li><a href="javascript:void(0);" title="yellow" style="background-color: #ffb400;" onclick="setActiveStyle('yellow')"></a></li>
            <li><a href="javascript:void(0);" title="green" style="background-color: #72b626;" onclick="setActiveStyle('green')"></a></li>
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

        {/* Live style switcher end */}

        {/* JS Template */}
        <script src={withPrefix(templateScript)} type="text/javascript"></script>
        {/* JS StyleSwitcher */}
        <script src={withPrefix(styleSwitcherScript)} type="text/javascript"></script>
    </div>
   )
}

export default Footer;