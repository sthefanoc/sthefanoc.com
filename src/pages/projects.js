import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
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
                  <img src={withPrefix('portfolio/1.jpg')} alt="Project #1" />
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
                  <img src={withPrefix('portfolio/2.jpg')} alt="Project #2" />
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
                  <img src={withPrefix('portfolio/3.jpg')} alt="Project #3" />
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
                  <img src={withPrefix('portfolio/4.jpg')} alt="Project #4" />
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
                  <img src={withPrefix('portfolio/5.jpg')} alt="Project #5" />
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
                  <img src={withPrefix('portfolio/6.jpg')} alt="Project #6" />
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
      </section>
    </PrimaryLayout>
  )
};