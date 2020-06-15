import React, { Component } from "react";
import footerStyles from './Footer.module.css';
import { withPrefix } from 'gatsby';
import { render } from "react-dom";


class Footer extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      skin: "",
      theme: "",
    };
  }


  componentDidMount() {
    console.log("There is a Footer component on this page.");
    const links = document.querySelectorAll('.alternate-style');
    const totalLinks=links.length;

    function setActiveStyle(color){
        for(let i=0;i<totalLinks;i++){
            if(color === links[i].getAttribute('title')){
                links[i].removeAttribute("disabled");
            } else {
                links[i].setAttribute("disabled","true");
            }
        }
    }

    const colorBtns = document.querySelectorAll(".style-switcher li a");
    for(let i=0;i<colorBtns.length;i++){
        colorBtns[i].addEventListener("click", () => {
            setActiveStyle(colorBtns[i].title)
        })    
    }

    // skin selection
    const bodySkin=document.querySelectorAll(".body-skin");
    const totalBodySkin=bodySkin.length;
    const changeBodySkin = () =>{
        for(let j=0;j<totalBodySkin;j++){
            bodySkin[j].addEventListener("change", function(){
                if(this.value === 'dark'){
                    document.body.className="dark"
                } else {
                    document.body.className=""
                }
            })
        }
    }
    changeBodySkin();

    if(document.querySelector(".toggle-style-switcher")){
        document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
            document.querySelector(".style-switcher").classList.toggle("open");
        })
    }
  }
  render() {
  return (
    <div>
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
}}

export default Footer;