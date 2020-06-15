import React,  { Component } from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
// import { withPrefix } from 'gatsby';

class About extends Component {
  componentDidMount(){
    console.log('This is the About page inside the component did mount');
  }
  render(){
    return(
      <PrimaryLayout>
        <section className="about section" id="about">
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h1>About me</h1>
              </div>
            </div>
            <div className="row">
              <div className="about-content padd-15">
                <div className="row">
                  <div className="about-text padd-15">
                    <h2>Sthefano Carvalho, Growth Marketer and <span>Full Stack Developer</span></h2>
                    <p>Tech professional passionate about solving problems. After 7 years of experience in the industrial sector, dealing with Business Strategy and Business Intelligence, I decided to create an agency called <a href="https://masteradin.com/" target="_blank" rel="noopener noreferrer"><strong>Masteradin</strong></a>, focused on process automation and digital growth. For almost 2 years, I have been creating solutions with Python, for scripting, web scraping and automated tests (Selenium), and Javascript, for backend (NodeJS), frontend (React) and mobile (React Native) development.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="personal-info padd-15">
                    <div className="row">
                      <div className="info-item padd-15">
                        <p>Birthday: <span>December 28th, 1992</span></p>
                      </div>
                      <div className="info-item padd-15">
                        <p>Age: <span>27</span></p>
                      </div>
                      <div className="info-item padd-15">
                        <p>Portfolio: <span><a href="/portfolio">my work</a></span></p>
                      </div>
                      <div className="info-item padd-15">
                        <p>Email: <span><a href="mailto:sthefano@masteradin.com">my e-mail</a></span></p>
                      </div>
                      <div className="info-item padd-15">
                        <p>Location: <span><a href="https://goo.gl/maps/92hFkkeWKkvypprh9">São Paulo-SP, Brazil</a></span></p>
                      </div>
                      <div className="info-item padd-15">
                        <p>Freelance: <span>Available</span></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="buttons padd-15">
                        <a href="#" className="btn">Download CV</a>
                        <a href="#" className="btn">Hire me</a>
                      </div>
                    </div>
                  </div>
                  <div className="skills padd-15">
                    <div className="row">
                      <div className="skill-item padd-15">
                        <h5>Python</h5>
                        <div className="progress">
                          <div className="progress-in" style={{width: "80%"}}></div>
                          <div className="skill-percent">80%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>Javascript</h5>
                        <div className="progress">
                          <div className="progress-in" style={{width: "80%"}}></div>
                          <div className="skill-percent">80%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>ReactJS</h5>
                        <div className="progress">
                          <div className="progress-in" style={{width: "70%"}}></div>
                          <div className="skill-percent">70%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>React Native</h5>
                        <div className="progress">
                          <div className="progress-in" style={{width: "50%"}}></div>
                          <div className="skill-percent">50%</div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* <!-- Timeline education item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>
                            2009-2014
                          </h6>
                          <h4 className="timeline-title">Economics</h4>
                          <p className="timeline-text">Studies of Economics Science. Main topics: Finance, History, Statistics, Econometrics.</p>
                        </div>
                        {/* <!-- Timeline education item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>
                            2009-2014
                          </h6>
                          <h4 className="timeline-title">Economics</h4>
                          <p className="timeline-text">Studies of Economics Science. Main topics: Finance, History, Statistics, Econometrics.</p>
                        </div>
                        {/* <!-- Timeline education item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>
                            2009-2014
                          </h6>
                          <h4 className="timeline-title">Economics</h4>
                          <p className="timeline-text">Studies of Economics Science. Main topics: Finance, History, Statistics, Econometrics.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* <!-- Timeline education item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>
                            2009-2014
                          </h6>
                          <h4 className="timeline-title">Economics</h4>
                          <p className="timeline-text">Studies of Economics Science. Main topics: Finance, History, Statistics, Econometrics.</p>
                        </div>
                        {/* <!-- Timeline education item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>
                            2009-2014
                          </h6>
                          <h4 className="timeline-title">Economics</h4>
                          <p className="timeline-text">Studies of Economics Science. Main topics: Finance, History, Statistics, Econometrics.</p>
                        </div>
                        {/* <!-- Timeline education item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>
                            2009-2014
                          </h6>
                          <h4 className="timeline-title">Economics</h4>
                          <p className="timeline-text">Studies of Economics Science. Main topics: Finance, History, Statistics, Econometrics.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default About;
