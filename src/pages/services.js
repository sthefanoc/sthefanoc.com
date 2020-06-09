import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import { Link } from 'gatsby';

export default function About({data}) {
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
                <div className="icon"><i className="fa fa-code"></i></div>
                <h4>Frontend Development</h4>
                <p>Lorem ipsum bla test info test. Plenty of different text.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-code"></i></div>
                <h4>Backend Development</h4>
                <p>Lorem ipsum bla test info test. Plenty of different text.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-code"></i></div>
                <h4>React Native Development</h4>
                <p>Lorem ipsum bla test info test. Plenty of different text.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-rocket"></i></div>
                <h4>SEO Optimization</h4>
                <p>Lorem ipsum bla test info test. Plenty of different text. Lorem ipsum bla test info test. Plenty of different text. Lorem ipsum bla test info test. Plenty of different text.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-rocket"></i></div>
                <h4>SEM & Social Media Ads</h4>
                <p>Lorem ipsum bla test info test. Plenty of different text.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-laptop"></i></div>
                <h4>Process Automation</h4>
                <p>Lorem ipsum bla test info test. Plenty of different text.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            {/* <!-- Service item start --> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-journal"></i></div>
                <h4>Content for Link Building</h4>
                <p>Lorem ipsum bla test info test. Plenty of different text.</p>
              </div>
            </div>
            {/* <!-- Service item end --> */}
            
          </div>
        </div>
      </section>
    </PrimaryLayout>
  )
};