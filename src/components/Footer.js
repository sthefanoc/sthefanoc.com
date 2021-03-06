import React, { Component, useState } from "react";
import footerStyles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSpinner } from '@fortawesome/free-solid-svg-icons';


class Footer extends Component {    
  componentDidMount() {
    if(document){
      this.switchColor = (color) => {
        console.log('Switch color function!',color);
        localStorage.setItem("selectedBodySkinColor", color);
        
        // document.location.reload();
  
        const links = document.querySelectorAll('.alternate-style');
  
        for(let i=0;i<links.length;i++){
          if(color === links[i].getAttribute('title')){
              links[i].disabled=false;
              console.log(links[i].title, 'not disabled');
          } else {
            links[i].disabled=true;
            console.log(links[i].title, 'disabled');
          }
        }
      };

      this.updateBodySkinToLight = () => {
        console.log('gonna change to light');
        localStorage.setItem("selectedBodyTheme", 'light');
        document.body.className="";
        document.querySelector('input[value="light"]').checked="true";
      };
      this.updateBodySkinToDark = () => {
        console.log('gonna change to dark');
        localStorage.setItem("selectedBodyTheme", 'dark');
        document.body.className="dark"
        document.querySelector('input[value="dark"]').checked="true";
      };
      this.switchBodySkin = (bodyTheme) => {
        console.log('switcher theme!', bodyTheme)
        localStorage.setItem("selectedBodyTheme", bodyTheme)
        // const bodySkin=document.querySelectorAll(".body-skin");
        // const totalBodySkin=bodySkin.length;
        // for(let j=0;j<totalBodySkin;j++){
        if(bodyTheme === 'dark'){
            console.log('gonna change to dark!');
            document.body.className="dark"
            document.querySelector('input[value="dark"]').checked="true";
        } else {
            console.log('gonna change to light!');
            document.body.className="";
            document.querySelector('input[value="light"]').checked="true";
        }
        // }
      };
    }  

    console.log("There is a Footer component on this page.");
    const isBodyDark = document.getElementsByTagName('body')[0].classList[0];
    if(isBodyDark){
      document.querySelector('input[value="dark"]').checked="true";
    } else {
      document.querySelector('input[value="light"]').checked="true";
    };
    
    

    if(document.querySelector(".toggle-style-switcher")){
        document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
            document.querySelector(".style-switcher").classList.toggle("open");
            if(Object.values(document.querySelector(".style-switcher").classList).includes('open')){
              console.log('open')
              document.querySelector('#no-spin-cog').classList.add('hidden');
              document.querySelector('#spin-cog').classList.remove('hidden');
            } else {
              console.log('closed');
              document.querySelector('#no-spin-cog').classList.remove('hidden');
              document.querySelector('#spin-cog').classList.add('hidden');
            }
        })
    }
  }
  render() {
    // const selectedBodyTheme = useState('light');
  return (
    <div>
        {/* <h1>{selectedBodyTheme}</h1> */}
        <div className="style-switcher">
          <div className="toggle-style-switcher">
            <FontAwesomeIcon id="no-spin-cog" icon={faCog} />
            <FontAwesomeIcon id="spin-cog" icon={faCog} spin className="hidden"/>
            {/* <i id="spin-cog" className="fa fa-cog fa-spin hidden"></i>
            <i id="no-spin-cog" className="fa fa-cog"></i> */}
          </div>
          <h5>Style Switcher</h5>
          <ul>
            <li><a href="#" title="pink" style={{backgroundColor: "#ec1839"}} onClick={ () => this.switchColor('pink')} ></a></li>
            <li><a href="#" title="blue" style={{backgroundColor: "#2196f3"}} onClick={ () => this.switchColor('blue')} ></a></li>
            <li><a href="#" title="orange" style={{backgroundColor: "#fa5b0f"}} onClick={ () => this.switchColor('orange')} ></a></li>
            <li><a href="#" title="yellow" style={{backgroundColor: "#ffb400"}} onClick={ () => this.switchColor('yellow')} ></a></li>
            <li><a href="#" title="green" style={{backgroundColor: "#72b626"}} onClick={ () => this.switchColor('green')} ></a></li>
          </ul>
          <h5>Body Skin</h5>
          <label >
            <input 
              type="radio" 
              className="body-skin" 
              name="body-style" 
              value="light" 
              defaultChecked="true" 
              onClick={() => this.updateBodySkinToLight()} 
              />
             Light
          </label>
          <label >
            <input 
              type="radio" 
              className="body-skin" 
              name="body-style" 
              value="dark" 
              // defaultChecked="false" 
              onClick={() => this.updateBodySkinToDark()} 
              />
             Dark
          </label>
        </div>
    </div>
   )
}}

export default Footer;