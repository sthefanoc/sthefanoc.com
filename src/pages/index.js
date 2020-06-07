import React from "react";
import { graphql } from 'gatsby';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Post from '../components/Post';
import profilePicture from '../../static/sthefanoc.png';

export default function Home({data}) {
  return (
    <PrimaryLayout>
      <section class="home section" id="home">
        <div class="container">
          <div class="intro">
            <img src={profilePicture} alt="profile" class="shadow-dark" />
            <h1>Sthefano Carvalho</h1>
            <p>Growth Marketer | Full Stack Developer</p>
            <div class="social-links">
              <a href="https://github.com/sthefanoc/" target="_blank"><i class="fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/sthefanocarvalho/" target="_blank"><i class="fa fa-linkedin"></i></a>
              <a href="https://www.instagram.com/sthefanocarvalho/" target="_blank"><i class="fa fa-instagram"></i></a>
              <a href="https://www.youtube.com/channel/UCgVtIe1_Uhw936xaRcrZGFg" target="_blank"><i class="fa fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </section>
    </PrimaryLayout>
)}
