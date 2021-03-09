import React, { Component, useEffect } from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
// import { withPrefix } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faMapMarker,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
      name: "",
      email: "",
      subject: "",
      message: "",
      verificationSum: "",
      verificationSumResult: 0,
    }
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
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
  }

  handleVerificationSum = event => {
    // event.preventDefault()
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
    console.log("THE VERIFICATION SUM IS: ", this.state.verificationSum)
  }

  handleVerificationSumCheck = () => {
    if (
      Number(this.state.verificationSumResult) ==
      Number(this.state.verificationSum)
    ) {
      const sumChecker = document.querySelector("#sumChecker")
      sumChecker.style.display = "none"
      const sendMessageBtn = document.querySelector("#send-message")
      sendMessageBtn.style.pointerEvents = ""
      sendMessageBtn.style.removeProperty("background-color")
    } else {
      alert("Please verify the sum.")
    }
  }

  generateRandomValues = () => {
    if (!this.state.verificationSumResult) {
      console.log(this.state.verificationSumResult, "SUM DOESNT EXIST!")
      const sum = document.querySelector("#verificationSum")
      const firstValue = Math.floor(Math.random() * 10)
      const secondValue = Math.floor(Math.random() * 10)
      const result = firstValue + secondValue
      // this.setState({
      //   ["verificationSumResult"]: result,
      // })

      this.setState({
        verificationSumResult: result,
      })

      if (this) {
        console.log("THIS EXISTS")
      } else {
        console.log("THIS DOES NOT EXIST!")
      }
      console.log("SUM", this.state.verificationSum)
      console.log("RESULT", this.state.verificationSumResult)

      sum.innerHTML = `${firstValue} + ${secondValue} = `
      console.log(sum)

      console.log(this.state.verificationSumResult, "RESULTADO")
    } else {
      console.log("SUM ALREADY EXISTS", this.state.verificationSumResult)
    }
  }

  componentDidMount() {
    // setTimeout(generateRandomValues,5000)
    this.generateRandomValues()

    // console.log(process.env.SITE_RECAPTCHA_KEY)

    this.handleSubmit = event => {
      event.preventDefault()
      alert(
        `${this.state.name}, I'll be in touch as soon as possible! Thank you for your message :)`
      )
    }

    this.showAlert = () => {
      const msg = "Message sent! I will respond as soon as possible!"
      alert(msg)
    }

    this.sendMeYourEmail = () => {
      alert(
        "Awesome! You want my e-mail and I will gladly send it to you :)\n\nI only ask you for your name and e-mail in exchange. \nIs that ok?\n\nIf it is, just send me a message below. Thanks!"
      )
      const sendMeYourEmailSubject = document.querySelector(
        'input[name="subject"]'
      )
      const sendMeYourEmailMessage = document.querySelector(
        'textarea[name="message"]'
      )
      sendMeYourEmailSubject.value = "Sthefano, please send me your e-mail"
      sendMeYourEmailMessage.value =
        "Hello, Sthefano. I'm on your website. I have just clicked the option to get your email. Thanks."
      this.state.subject = sendMeYourEmailSubject.value
      this.state.message = sendMeYourEmailMessage.value
      // sendMessageBtn.scrollIntoView(false);
      // location.href="#send-message"
      let sendMessageBtn = document.querySelector("#send-message")
      let y = sendMessageBtn.getBoundingClientRect().top + window.scrollY
      window.scroll({
        top: y,
        behavior: "smooth",
      })
    }
    this.sendMeYourPhone = () => {
      alert(
        "Great! You want to call me. I will gladly send you my phone number :)\n\nBut this is a pretty private information... So I ask you your name and e-mail in exchange. \nIs that ok?\n\nIf it is, just send me a message below. Thanks!"
      )
      const sendMeYourPhoneSubject = document.querySelector(
        'input[name="subject"]'
      )
      const sendMeYourPhoneMessage = document.querySelector(
        'textarea[name="message"]'
      )
      sendMeYourPhoneSubject.value =
        "Sthefano, please send me your phone number"
      sendMeYourPhoneMessage.value =
        "Hello, Sthefano. I'm on your website. I have just clicked the option to get your phone number. Thanks."
      this.state.subject = sendMeYourPhoneSubject.value
      this.state.message = sendMeYourPhoneMessage.value
      let sendMessageBtn = document.querySelector("#send-message")
      let y = sendMessageBtn.getBoundingClientRect().top + window.scrollY
      window.scroll({
        top: y,
        behavior: "smooth",
      })
    }
    this.sendMeYourCV = () => {
      alert(
        "You want to take a look at my CV! Great!\n\nBut hey... This file has a lot of sensitive information about me... So can I ask you for your name and e-mail in exchange?\n\nIf I can, just complete the message below. Thank you."
      )
      const sendMeYourCVSubject = document.querySelector(
        'input[name="subject"]'
      )
      const sendMeYourCVMessage = document.querySelector(
        'textarea[name="message"]'
      )
      sendMeYourCVSubject.value = "Sthefano, please send me your CV"
      sendMeYourCVMessage.value =
        "Hello, Sthefano. I'm on your website. I have just clicked the option to get your CV. Thanks."
      this.state.subject = sendMeYourCVSubject.value
      this.state.message = sendMeYourCVMessage.value
      let sendMessageBtn = document.querySelector("#send-message")
      let y = sendMessageBtn.getBoundingClientRect().top + window.scrollY
      window.scroll({
        top: y,
        behavior: "smooth",
      })
    }
    this.hireMe = () => {
      alert(
        "Awesome! You are interested in hiring me! I'm glad :)\n\nSend me some information about your project! And soon I'll contact you.\n\nIf it is, just tell me the details below. Thanks!"
      )
      const hireMeSubject = document.querySelector('input[name="subject"]')
      const hireMeMessage = document.querySelector('textarea[name="message"]')
      hireMeSubject.value = "Sthefano, I want to hire your services"
      hireMeMessage.value =
        "Hello, Sthefano. I'm on your website. I have just clicked the option to hire you.\nHere are the details of my project: \n\n\n\nLet's talk? Thank you."
      this.state.subject = hireMeSubject.value
      this.state.message = hireMeMessage.value
      let sendMessageBtn = document.querySelector("#send-message")
      let y = sendMessageBtn.getBoundingClientRect().top + window.scrollY
      window.scroll({
        top: y,
        behavior: "smooth",
      })
    }
    if (Number(localStorage.getItem("sthefanoc-sendMailFromAbout"))) {
      localStorage.setItem("sthefanoc-sendMailFromAbout", 0)
      this.sendMeYourEmail()
    } else if (Number(localStorage.getItem("sthefanoc-sendCVFromAbout"))) {
      localStorage.setItem("sthefanoc-sendCVFromAbout", 0)
      this.sendMeYourCV()
    } else if (Number(localStorage.getItem("sthefanoc-hireMeFromAbout"))) {
      localStorage.setItem("sthefanoc-hireMeFromAbout", 0)
      this.hireMe()
    }

    this.onSubmitCaptcha = token => {
      document.getElementById("protected-form").submit()
    }
  }

  render() {
    const { status } = this.state

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
                {/* <div className="icon"><FontAwesomeIcon icon={faAngleLeft} /><i className="fa fa-phone"></i></div> */}
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <h4>Call me</h4>
                <a onClick={this.sendMeYourPhone} href="#">
                  my number
                </a>
              </div>
              {/* <!-- Contact info end --> */}
              {/* <!-- Contact info start --> */}
              <div className="contact-info-item padd-15">
                {/* <div className="icon"><i className="fa fa-map-marker"></i></div> */}
                <div className="icon">
                  <FontAwesomeIcon icon={faMapMarker} />
                </div>
                <h4>Visit me</h4>
                <a
                  href="https://masteradin.com/"
                  target="_blank"
                  rel="noopenner noreferrer"
                >
                  my company
                </a>
              </div>
              {/* <!-- Contact info end --> */}
              {/* <!-- Contact info start --> */}
              <div className="contact-info-item padd-15">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                {/* <div className="icon"><i className="fa fa-envelope"></i></div> */}
                <h4>Send me a message</h4>
                <a onClick={this.sendMeYourEmail} href="#">
                  my e-mail
                </a>
              </div>
              {/* <!-- Contact info end --> */}
            </div>
            {/* <!-- Contac form start --> */}
            <div className="row">
              <form
                // onSubmit={this.submitForm}
                action="https://formspree.io/xleplbpw"
                method="POST"
                className="contact-form padd-15"
                id="protected-form"
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
                  <div className="form-item col-3 padd-15" id="sumChecker">
                    <div
                      className="form-group"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        paddingRight: "10px",
                      }}
                      onChange={this.generateRandomValues}
                    >
                      <div
                        id="verificationSum"
                        style={{
                          width: "40%",
                          margin: "0px 0px 25px 0px",
                          color: "gray",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                      >
                        Soma:
                      </div>
                      <input
                        name="verificationSum"
                        type="text"
                        className="form-control"
                        placeholder="Sum*"
                        value={this.state.verificationSum}
                        onChange={this.handleVerificationSum}
                      />
                      <button
                        type="reset"
                        className="btn secondary"
                        onClick={this.handleVerificationSumCheck}
                        style={{
                          marginLeft: "10px",
                          backgroundColor: "#DCDCDC",
                          color: "#000",
                        }}
                      >
                        Verify result
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 padd-15">
                    {/* <button type="submit" className="btn" >Send message</button> */}
                    {status === "SUCCESS" ? (
                      <p>Message sent!</p>
                    ) : (
                      <button
                        type="submit"
                        // onClick={this.showAlert}
                        className="btn g-recaptcha"
                        id="send-message"
                        data-sitekey={process.env.SITE_RECAPTCHA_KEY}
                        data-callback="onSubmit"
                        data-action="submit"
                        style={{
                          pointerEvents: "none",
                          backgroundColor: "gray",
                        }}
                      >
                        SEND MESSAGE
                      </button>
                    )}
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
    )
  }
}
