import React, { Component } from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
// import { withPrefix } from 'gatsby';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
  
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  // state = {
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  };
  
  
  componentDidMount(){
    this.handleSubmit = event => {
      event.preventDefault()
      alert(`${this.state.name}, I'll be in touch as soon as possible! Thank you for your message :)`)
    };

    this.showAlert = () => {
      const msg = 'Message sent! I will respond as soon as possible!';
      alert(msg)
    };

    
    this.sendMeYourEmail = () => {
      alert('Awesome! You want my e-mail and I will gladly send it to you :)\n\nI only ask you for your name and e-mail in exchange. \nIs that ok?\n\nIf it is, just send me a message below. Thanks!');
      const sendMeYourEmailSubject = document.querySelector('input[name="subject"]');
      const sendMeYourEmailMessage = document.querySelector('textarea[name="message"]');
      sendMeYourEmailSubject.value = 'Sthefano, please send me your e-mail';
      sendMeYourEmailMessage.value = 'Hello, Sthefano. I\'m on your website. I have just clicked the option to get your email. Thanks.' ;
      this.state.subject = sendMeYourEmailSubject.value;
      this.state.message = sendMeYourEmailMessage.value;
    }
    this.sendMeYourPhone = () => {
      alert('Great! You want to call me. I will gladly send you my phone number :)\n\nBut this is a pretty private information... So I ask you your name and e-mail in exchange. \nIs that ok?\n\nIf it is, just send me a message below. Thanks!');
      const sendMeYourPhoneSubject = document.querySelector('input[name="subject"]');
      const sendMeYourPhoneMessage = document.querySelector('textarea[name="message"]');
      sendMeYourPhoneSubject.value = 'Sthefano, please send me your phone number';
      sendMeYourPhoneMessage.value = 'Hello, Sthefano. I\'m on your website. I have just clicked the option to get your phone number. Thanks.' ;
      this.state.subject = sendMeYourPhoneSubject.value;
      this.state.message = sendMeYourPhoneMessage.value;
    }
    this.sendMeYourCV = () => {
      alert('You want to take a look at my CV! Great!\n\nBut hey... This file has a lot of sensitive information about me... So can I ask you for your name and e-mail in exchange?\n\nIf I can, just complete the message below. Thank you.');
      const sendMeYourCVSubject = document.querySelector('input[name="subject"]');
      const sendMeYourCVMessage = document.querySelector('textarea[name="message"]');
      sendMeYourCVSubject.value = 'Sthefano, please send me your CV';
      sendMeYourCVMessage.value = 'Hello, Sthefano. I\'m on your website. I have just clicked the option to get your CV. Thanks.' ;
      this.state.subject = sendMeYourCVSubject.value;
      this.state.message = sendMeYourCVMessage.value;
    }
    this.hireMe = () => {
      alert('Awesome! You are interested in hiring me! I\'m glad :)\n\nSend me some information about your project! And soon I\'ll contact you.\n\nIf it is, just tell me the details below. Thanks!');
      const hireMeSubject = document.querySelector('input[name="subject"]');
      const hireMeMessage = document.querySelector('textarea[name="message"]');
      hireMeSubject.value = 'Sthefano, I want to hire your services';
      hireMeMessage.value = 'Hello, Sthefano. I\'m on your website. I have just clicked the option to hire you.\nHere are the details of my project: \n\n\n\nLet\'s talk? Thank you.';
      this.state.subject = hireMeSubject.value;
      this.state.message = hireMeMessage.value;
    }
    if(Number(localStorage.getItem('sthefanoc-sendMailFromAbout'))){
      localStorage.setItem('sthefanoc-sendMailFromAbout', 0);
      this.sendMeYourEmail();
    } else if(Number(localStorage.getItem('sthefanoc-sendCVFromAbout'))){
      localStorage.setItem('sthefanoc-sendCVFromAbout', 0);
      this.sendMeYourCV();
    } else if(Number(localStorage.getItem('sthefanoc-hireMeFromAbout'))){
      localStorage.setItem('sthefanoc-hireMeFromAbout', 0);
      this.hireMe();
    };
  }
  render() {
    const { status } = this.state;
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
              <a onClick={this.sendMeYourPhone} href="#" >my number</a>
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
              <a onClick={this.sendMeYourEmail} href="#" >my e-mail</a>
            </div>
            {/* <!-- Contact info end --> */}
          </div>
          {/* <!-- Contac form start --> */}
          <div className="row">
            <form 
              onSubmit={this.submitForm}
              action="https://formspree.io/xleplbpw" 
              method="POST"
              className="contact-form padd-15"
              >
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input 
                      name="name" 
                      type="text" 
                      className="form-control" 
                      placeholder="Name*" 
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" name="_gotcha" className="hidden" />
                    <input 
                      name="email" 
                      type="email" 
                      className="form-control" 
                      placeholder="Email*" 
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input 
                      name="subject" 
                      type="text" 
                      className="form-control" 
                      placeholder="Subject*" 
                      value={this.state.subject}
                      onChange={this.handleInputChange}
                      />
                  </div>
                </div>
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea 
                      name="message" 
                      type="text" 
                      className="form-control" 
                      placeholder="Your message*"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                      ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  {/* <button type="submit" className="btn" >Send message</button> */}
                  {status === "SUCCESS" ? <p>Message sent!</p> : <button type="submit" onClick={this.showAlert} className="btn" >Send message</button>}
                  {/* {status === "SUCCESS" ? <p>Message sent!</p> : <button type="submit" className="btn" >Send message</button>} */}
                  {status === "ERROR" && <p>Ooops! There was an error.</p>}
                  {/* <button type="submit" className="btn">Send message</button> */}
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
  }

