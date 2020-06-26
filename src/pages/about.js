import React,  { Component } from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import SkillsChart from '../components/SkillsChart'
import { Link, navigate, withPrefix } from 'gatsby';

class About extends Component {
  componentDidMount(){
    console.log('This is the About page inside the component did mount');



    this.getRealTimeAge = () => {
      let age = document.querySelector('span[class="live-age"]');
      let now = new Date();
      let birthday = new Date(1992,11,28,10,30);
      let realTimeAge = new Date(now - birthday);
      let year = realTimeAge.getUTCFullYear() -1970;
      let month = realTimeAge.getUTCMonth();
      // let day = realTimeAge.getUTCDay();
      // let hour = realTimeAge.getUTCHours();
      // let minute = realTimeAge.getUTCMinutes();
      // let seconds = realTimeAge.getUTCSeconds();
      // age.textContent = `${year} years, ${month} months, ${day} days, ${hour} hours, ${minute} minutes, ${seconds} seconds`
      age.textContent = `${year} years, ${month} months`
    };

    // setInterval(this.getRealTimeAge, 1000);
    this.getRealTimeAge();
    
  }
  sendMailFromAboutPage = () => {
    localStorage.setItem('sthefanoc-sendMailFromAbout', 1);
    navigate('/contact');
  }
  sendCVFromAboutPage = () => {
    localStorage.setItem('sthefanoc-sendCVFromAbout', 1);
    navigate('/contact');
  }
  hireMeFromAboutPage = () => {
    localStorage.setItem('sthefanoc-hireMeFromAbout', 1);
    navigate('/contact');
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
                        <p>Age: <span className="live-age">27</span></p>
                      </div>
                      <div className="info-item padd-15">
                        <p>Portfolio: <span><a href="/projects">my work</a></span></p>
                      </div>
                      <div className="info-item padd-15">
                        <p>Email: <span><a onClick={this.sendMailFromAboutPage} href="#">my e-mail</a></span></p>
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
                        <a href="#" onClick={this.sendCVFromAboutPage} className="btn">Download CV</a>
                        <a href="#" onClick={this.hireMeFromAboutPage} className="btn">Hire me</a>
                      </div>
                    </div>
                  </div>
                  <div className="skills padd-15">
                    <SkillsChart />
                    {/* <div className="row">
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
                    </div> */}
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
                            2018-2019
                          </h6>
                          <h4 className="timeline-title">Computer Science | UFABC (Brazil)</h4>
                          <p className="timeline-text">Incomplete Bachelor's degree com computer science. Progamming logic, algoriths, Mathematics and Physics.</p>
                        </div>
                        {/* <!-- Timeline education item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>
                            2009-2014
                          </h6>
                          <h4 className="timeline-title">Economics | Mackenzie (Brazil)</h4>
                          <p className="timeline-text">Studies of Economics Science. Main topics: Finance, History, Statistics, Econometrics.</p>
                        </div>
                        {/* <!-- Timeline education item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>
                            2007-2009
                          </h6>
                          <h4 className="timeline-title">High School | Colégio Santo Américo (Brazil)</h4>
                          <p className="timeline-text">Graduated on a scholarship studying in one of the best education institutions of the country.</p>
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
                            2018-to date
                          </h6>
                          <h4 className="timeline-title">Cofounder | Masteradin</h4>
                          <p className="timeline-text">Process automation with Python. Growth oriented Web Development. SEO, SEM, Social Media, Link Building.</p>
                        </div>
                        {/* <!-- Timeline education item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>
                            2014-2018
                          </h6>
                          <h4 className="timeline-title">Business Intelligence Analyst | Unilever</h4>
                          <p className="timeline-text">Business Analytics. Investment analysis. Dashboard development. Implementation of business tools.</p>
                        </div>
                        {/* <!-- Timeline education item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>
                            2012-2013
                          </h6>
                          <h4 className="timeline-title">Customer Marketing Intern | Unilever</h4>
                          <p className="timeline-text">Channel strategy. Visibility and Offers. Sales Point Operations. Financial management.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="certifications padd-15">
                  <h3 className="title">Certifications</h3>
                  <div className="row">
                    <div className="certifications-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* <!-- Timeline education item start --> */}
                        <div className="certitication-item padd-15">
                          <div className="row time-details">
                            <div className="row certification-date"><i className="fa fa-calendar"></i>Jun 2020</div> 
                            <div className="row certification-duration"><i className="fa fa-clock-o"></i>100h</div> 
                          </div>
                          <div className="row certification-details">
                            <div className="row certification-image">
                              <img src={withPrefix('portfolio/1.jpg')} alt="Project #1" />
                            </div>
                            <div className="row certification-info">
                              <Link to='/blog' className="timeline-title">Bootcamp Python Fullstack</Link>
                              <p className="timeline-text">Bootcamp teaching Javascript and technologies related to python for backend.</p>
                            </div>
                          </div>
                          <div className="row certification-links">
                              <Link to='/blog' className="row related-blog-post"><i className="fa fa-file-text"></i>Post</Link>
                              <a href="" className="row certificate"><i className="fa fa-certificate"></i>Certificate</a>
                            </div>
                        </div>
                        {/* <!-- Timeline education item end --> */}
                        {/* <!-- Timeline education item start --> */}
                        <div className="certitication-item padd-15">
                          <div className="row time-details">
                            <div className="row certification-date"><i className="fa fa-calendar"></i>May 2020</div> 
                            <div className="row certification-duration"><i className="fa fa-clock-o"></i>17h</div> 
                          </div>
                          <div className="row certification-details">
                            <div className="row certification-image">
                              <img src={withPrefix('portfolio/1.jpg')} alt="Project #1" />
                            </div>
                            <div className="row certification-info">
                              <Link to='/blog' className="timeline-title">Bootcamp Become Remote</Link>
                              <p className="timeline-text">Bootcamp techniques to become a better remote worker. Focus on communication and technologies available to increase productivity.</p>
                            </div>
                          </div>
                          <div className="row certification-links">
                              <Link to='/blog' className="row related-blog-post"><i className="fa fa-file-text"></i>Post</Link>
                              <a href="" className="row certificate"><i className="fa fa-certificate"></i>Certificate</a>
                            </div>
                        </div>
                        {/* <!-- Timeline education item end --> */}
                        {/* <!-- Timeline education item start --> */}
                        <div className="certitication-item padd-15">
                          <div className="row time-details">
                            <div className="row certification-date"><i className="fa fa-calendar"></i>Jun 2020</div> 
                            <div className="row certification-duration"><i className="fa fa-clock-o"></i>100h</div> 
                          </div>
                          <div className="row certification-details">
                            <div className="row certification-image">
                              <img src={withPrefix('portfolio/1.jpg')} alt="Project #1" />
                            </div>
                            <div className="row certification-info">
                              <Link to='/blog' className="timeline-title">Bootcamp Python Fullstack</Link>
                              <p className="timeline-text">Bootcamp teaching Javascript and technologies related to python for backend.</p>
                            </div>
                          </div>
                          <div className="row certification-links">
                              <Link to='/blog' className="row related-blog-post"><i className="fa fa-file-text"></i>Post</Link>
                              <a href="" className="row certificate"><i className="fa fa-certificate"></i>Certificate</a>
                            </div>
                        </div>
                        {/* <!-- Timeline education item end --> */}

      
                      </div>
                    </div>
                  </div>
                  <div className="all-certificates">
                  <Link to='/about' onClick={()=>{alert("Soon I'll have the complete list!")}} className="see-all-certificates"><i className="fa fa-hand-o-right"></i>See all certificates</Link> 
                    
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
