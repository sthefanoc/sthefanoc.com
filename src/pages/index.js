import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import profilePicture from '../../static/images/sthefanoc.webp';
// import { withPrefix } from 'gatsby';

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
              <a href="https://github.com/sthefanoc/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/sthefanocarvalho/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
              <a href="https://www.instagram.com/sthefanocarvalho/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
              <a href="https://www.youtube.com/channel/UCgVtIe1_Uhw936xaRcrZGFg" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </section>
    </PrimaryLayout>
)}
