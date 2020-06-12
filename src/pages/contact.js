import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import {Form, Button} from 'react-bootstrap';

export default function Contact() {
  return (
    <PrimaryLayout>
      <section class="contact section" id="contact">
        <div class="container">
          <div class="row">
            <div class="section-title padd-15">
              <h1>Contact me</h1>
            </div>
          </div>
          <div class="row">
            {/* <!-- Contact info start --> */}
            <div class="contact-info-item padd-15">
              <div class="icon"><i class="fa fa-phone"></i></div>
              <h4>Call me</h4>
              <a href="">my number</a>
            </div>
            {/* <!-- Contact info end --> */}
            {/* <!-- Contact info start --> */}
            <div class="contact-info-item padd-15">
              <div class="icon"><i class="fa fa-map-marker"></i></div>
              <h4>Visit me</h4>
              <a href="https://masteradin.com/" target="_blank" rel="noopenner noreferrer">my company</a>
            </div>
            {/* <!-- Contact info end --> */}
            {/* <!-- Contact info start --> */}
            <div class="contact-info-item padd-15">
              <div class="icon"><i class="fa fa-envelope"></i></div>
              <h4>Send me a message</h4>
              <a href="">my e-mail</a>
            </div>
            {/* <!-- Contact info end --> */}
          </div>
          {/* <!-- Contac form start --> */}
          <div class="row">
            <form action="" class="contact-form padd-15">
              <div class="row">
                <div class="form-item col-6 padd-15">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name*" />
                  </div>
                </div>
                <div class="form-item col-6 padd-15">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email*" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-item col-12 padd-15">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Subject*" />
                  </div>
                </div>
                <div class="form-item col-12 padd-15">
                  <div class="form-group">
                    <textarea type="text" class="form-control" placeholder="Your message*"></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 padd-15">
                  <button type="submit" class="btn">Send message</button>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- Contac form end --> */}
        </div>
      </section>
    </PrimaryLayout>
)}
