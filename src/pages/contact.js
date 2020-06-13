import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
// import { withPrefix } from 'gatsby';

export default function Contact() {
  console.log('This is the Contact page');
  return (
    <PrimaryLayout>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h1>Contact me</h1>
            </div>
          </div>
          <div className="row">
            {/* <!-- Contact info start --> */}
            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-phone"></i></div>
              <h4>Call me</h4>
              <a href="">my number</a>
            </div>
            {/* <!-- Contact info end --> */}
            {/* <!-- Contact info start --> */}
            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-map-marker"></i></div>
              <h4>Visit me</h4>
              <a href="https://masteradin.com/" target="_blank" rel="noopenner noreferrer">my company</a>
            </div>
            {/* <!-- Contact info end --> */}
            {/* <!-- Contact info start --> */}
            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-envelope"></i></div>
              <h4>Send me a message</h4>
              <a href="">my e-mail</a>
            </div>
            {/* <!-- Contact info end --> */}
          </div>
          {/* <!-- Contac form start --> */}
          <div className="row">
            <form action="" className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name*" />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email*" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject*" />
                  </div>
                </div>
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea type="text" className="form-control" placeholder="Your message*"></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <button type="submit" className="btn">Send message</button>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- Contac form end --> */}
        </div>
        {/* JS Template */}
        {/* <script src={withPrefix('js/script.js')} type="text/javascript"></script> */}
        {/* JS StyleSwitcher */}
        {/* <script src={withPrefix('js/styleSwitcher.js')} type="text/javascript"></script> */}
      </section>
    </PrimaryLayout>
)}
