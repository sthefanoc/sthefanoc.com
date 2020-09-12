import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import profilePicture from '../../static/images/sthefanoc.webp';
import { Link } from 'gatsby';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube, faInstagram, faTwitter, faDev, faMedium } from '@fortawesome/free-brands-svg-icons';
import ReactTooltip from "react-tooltip";
import GetImage from "../components/GetImage";



export default function Home({data}) {
  console.log('This is the Home page');
  return (
    <PrimaryLayout>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img src={profilePicture} alt="profile" className="shadow-dark" />
            <h1>Sthefano Carvalho</h1>
            <p>Growth Marketer | Full Stack Developer</p>
            <div className="social-links">
              <ReactTooltip />
              <a href="https://github.com/sthefanoc/" target="_blank" rel="noopener noreferrer" data-tip='Github Profile'>
                <FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/sthefanocarvalho/" target="_blank" rel="noopener noreferrer" data-tip='LinkedIn'>
                <FontAwesomeIcon icon={faLinkedin} /></a>
              {/* <a href="https://www.instagram.com/sthefanocarvalho/" target="_blank" rel="noopener noreferrer" data-tip='Instagram'>
                <FontAwesomeIcon icon={faInstagram} /></a> */}
              {/* <a href="https://www.youtube.com/channel/UCgVtIe1_Uhw936xaRcrZGFg" target="_blank" rel="noopener noreferrer" data-tip='YouTube Channel'>
                <FontAwesomeIcon icon={faYoutube} /></a> */}
              <a href="https://twitter.com/intent/user?screen_name=Sthefano_C" target="_blank" rel="noopener noreferrer" data-tip='Follow me on Twitter'>
                <FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://medium.com/@sthefanoc" target="_blank" rel="noopener noreferrer" data-tip='Medium: Marketing posts'>
                <FontAwesomeIcon icon={faMedium} /></a>
              <a href="https://dev.to/sthefanoc" target="_blank" rel="noopener noreferrer" data-tip='Dev.to: Develpment posts'>
                <FontAwesomeIcon icon={faDev} /></a>
            </div>
          </div>
          <div>Agora estou em português!</div>
        </div>
        {/* <GetImage /> */}
      </section>
    </PrimaryLayout>
)}
