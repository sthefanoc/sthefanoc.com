import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
// import { withPrefix } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCode, faMobile, faFileAlt, faRocket, faCogs, faLaptop, faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faReact } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  console.log('This is the Services page');
  return (
    <PrimaryLayout>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h1>Services</h1>
            </div>
          </div>
          <div className="row">
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><FontAwesomeIcon icon={faDesktop} /></div>
                <h4>Frontend Development</h4>
                <p>Web development using the best tools and frameworks available. ReactJS, GatsbyJS, NextJS.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><FontAwesomeIcon icon={faCode} /></div>
                <h4>Backend Development</h4>
                <p>Server-side development using NodeJS and Django, depending on the application.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><FontAwesomeIcon icon={faMobile} /></div>
                <h4>React Native Development</h4>
                <p>Development of hybrid apps compatible with Android and iOS.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><FontAwesomeIcon icon={faGoogle} /></div>
                <h4>SEO</h4>
                <p>Search Engine Optimization, including technical aspects, such as code evaluation, and content.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><FontAwesomeIcon icon={faRocket} /></div>
                <h4>SEM & Social Media Ads</h4>
                <p>Google Ads and Facebook Ads. Statistical approach to ads management, using A/B tests and automation.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><FontAwesomeIcon icon={faFileAlt} /></div>
                <h4>Content for Link Building</h4>
                <p>Content strategy for acquisition of backlinks. SEO approach on content development.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><FontAwesomeIcon icon={faMousePointer} /></div>
                <h4>Automated Tests</h4>
                <p>Creation of tools and automated tests using Selenium.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><FontAwesomeIcon icon={faLaptop} /></div>
                <h4>Web Scraping</h4>
                <p>Web scraping projects using BeautifulSoup4, Selenium and Scrapy.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><FontAwesomeIcon icon={faCogs} /></div>
                <h4>Process Automation</h4>
                <p>Scripting with Python. Using multiple libraries to create specific solutions for specific problems.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            
          </div>
        </div>
        {/* JS Template */}
        {/* <script src={withPrefix('js/script.js')} type="text/javascript"></script> */}
        {/* JS StyleSwitcher */}
        {/* <script src={withPrefix('js/styleSwitcher.js')} type="text/javascript"></script> */}
      </section>
    </PrimaryLayout>
  )
};