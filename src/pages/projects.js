import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import { Link } from 'gatsby';
import project1 from '../../static/portfolio/1.jpg';
import project2 from '../../static/portfolio/2.jpg';
import project3 from '../../static/portfolio/3.jpg';
import project4 from '../../static/portfolio/4.jpg';
import project5 from '../../static/portfolio/5.jpg';
import project6 from '../../static/portfolio/6.jpg';
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";

export default function Projects({data}) {
  return (
    <PrimaryLayout>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h1>Portfolio</h1>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button className="active" type="button" data-filter="all">All</button>
              <button type="button" data-filter="python">Python</button>
              <button type="button" data-filter="javascript">Javascript</button>
              <button type="button" data-filter="reactjs">ReactJS</button>
              <button type="button" data-filter="react-native">React Native</button>
            </div>
          </div>
          <div className="row portfolio-items">
            {/* <!-- Portfolio Item start --> */}
            <div className="portfolio-item padd-15" data-category="python">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={project1} alt="Project #1" />
                </div>
                <div className="portfolio-info">
                  <h4>Project number #1</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item end --> */}
            {/* <!-- Portfolio Item start --> */}
            <div className="portfolio-item padd-15" data-category="reactjs">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={project2} alt="Project #2" />
                </div>
                <div className="portfolio-info">
                  <h4>Another project day</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item end --> */}
            {/* <!-- Portfolio Item start --> */}
            <div className="portfolio-item padd-15" data-category="javascript">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={project3} alt="Project #3" />
                </div>
                <div className="portfolio-info">
                  <h4>Crazy Javascript project</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item end --> */}
            {/* <!-- Portfolio Item start --> */}
            <div className="portfolio-item padd-15" data-category="python">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={project4} alt="Project #4" />
                </div>
                <div className="portfolio-info">
                  <h4>Such pythoh</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item end --> */}
            {/* <!-- Portfolio Item start --> */}
            <div className="portfolio-item padd-15" data-category="react-native">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={project5} alt="Project #5" />
                </div>
                <div className="portfolio-info">
                  <h4>Many programming</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item end --> */}
            {/* <!-- Portfolio Item start --> */}
            <div className="portfolio-item padd-15" data-category="reactjs">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={project6} alt="Project #6" />
                </div>
                <div className="portfolio-info">
                  <h4>WOW</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item end --> */}
          </div>
        </div>
        {/* <!-- Lightbox start --> */}
        <div className="lightbox">
          <div className="lightbox-content">
            <div className="lightbox-close">&times;</div>
            <img src="images/portfolio/1.jpg" alt="Name of The Project" className="lightbox-img next-item" onclick="nextItem()" />
            <div className="lightbox-caption">
              <div className="caption-text">Project # 1</div>
              <div className="caption-counter">1 of 6</div>
            </div>
          </div>
          <div className="lightbox-controls">
            <div className="prev-item" onclick="prevItem()" ><i className="fa fa-angle-left"></i></div>
            <div className="next-item" onclick="nextItem()" ><i classNa="fa fa-angle-right"></i></div>
          </div>
        </div>
        {/* <!-- Lightbox end --></div> */}
      </section>
    </PrimaryLayout>
  )
};