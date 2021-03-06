import React, { Component } from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import SkillsChart from "../components/SkillsChart"
import { Link, navigate, withPrefix } from "gatsby"
import ReactTooltip from "react-tooltip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInfoCircle,
  faCalendarAlt,
  faCertificate,
  faHandPointRight,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons"

class About extends Component {
  componentDidMount() {
    console.log("This is the About page inside the component did mount")

    this.getRealTimeAge = () => {
      let age = document.querySelector('span[class="live-age"]')
      let now = new Date()
      let birthday = new Date(1992, 11, 28, 10, 30)
      let realTimeAge = new Date(now - birthday)
      let year = realTimeAge.getUTCFullYear() - 1970
      let month = realTimeAge.getUTCMonth()
      age.textContent = `${year} years, ${month} months`
    }

    this.getRealTimeAge()
  }
  sendMailFromAboutPage = () => {
    localStorage.setItem("sthefanoc-sendMailFromAbout", 1)
    navigate("/contact")
  }
  sendCVFromAboutPage = () => {
    localStorage.setItem("sthefanoc-sendCVFromAbout", 1)
    navigate("/contact")
  }
  hireMeFromAboutPage = () => {
    localStorage.setItem("sthefanoc-hireMeFromAbout", 1)
    navigate("/contact")
  }
  render() {
    const { data } = this.props
    const years = () => {
      const now = new Date()
      const companyBirth = new Date(2018, 10, 1, 10, 30)
      const companyAge = new Date(now - companyBirth)
      let year = companyAge.getUTCFullYear() - 1970
      let month = companyAge.getUTCMonth()
      const companyAgeInYears = `${year} years and ${month} months`
      return companyAgeInYears
    }

    return (
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
                    {/* <h2>Sthefano Carvalho, Growth Marketer and <span>Full Stack Developer</span></h2> */}
                    <h2>
                      Sthefano Carvalho, Growth Marketer and{" "}
                      <span>Full Stack Developer</span>
                    </h2>
                    <p>
                      Tech professional passionate about solving problems. After
                      7 years of experience Consumer Goods Industry, dealing
                      with Marketing Strategy and Business Intelligence, I
                      decided to create an agency called{" "}
                      <a
                        href="https://masteradin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Masteradin</strong>
                      </a>
                      , focused on process automation and digital growth. For{" "}
                      {years()} I have been creating solutions with{" "}
                      <b>Python</b> (scripting, web scraping and automated tests
                      with <b>Selenium</b>) and <b>Javascript</b>, using{" "}
                      <b>Node JS</b> for back-end, <b>React JS</b> for front-end
                      and <b>React Native</b> for mobile development.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="personal-info padd-15">
                    <div className="row">
                      <div className="info-item padd-15">
                        <p>
                          Birthday: <span>December 28th, 1992</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <ReactTooltip />
                        <p>
                          Age: <span className="live-age">27</span>
                          <FontAwesomeIcon
                            icon={faInfoCircle}
                            data-tip="Yes, this is code."
                          />
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Portfolio:{" "}
                          <span>
                            <a href="/projects">my work</a>
                          </span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Email:{" "}
                          <span>
                            <a onClick={this.sendMailFromAboutPage} href="#">
                              my e-mail
                            </a>
                          </span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Location:{" "}
                          <span>
                            <a href="https://goo.gl/maps/92hFkkeWKkvypprh9">
                              São Paulo-SP, Brazil
                            </a>
                          </span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Freelance: <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="buttons padd-15">
                        <a
                          href="https://resume.sthefanoc.com/"
                          target="_blank"
                          className="btn"
                        >
                          Download CV
                        </a>
                        <a
                          href="#"
                          onClick={this.hireMeFromAboutPage}
                          className="btn"
                        >
                          Hire me
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="skills padd-15">
                    <SkillsChart />
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
                              {/* <i className="fa fa-calendar">faCalendar</i> */}
                              <FontAwesomeIcon icon={faCalendarAlt} />
                              2020-2020
                            </h6>
                            <h4 className="timeline-title">
                              Growth Marketing Minidegree | CXL Institute
                            </h4>
                            <p className="timeline-text">
                              Title of Growth Marketing Specialist for
                              Analytics, experimentation, and growth marketing
                              training.
                            </p>
                          </div>
                          {/* <!-- Timeline education item --> */}
                          {/* <!-- Timeline education item --> */}
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h6 className="timeline-date">
                              <FontAwesomeIcon icon={faCalendarAlt} />
                              2018-2019
                            </h6>
                            <h4 className="timeline-title">
                              Computer Science | UFABC (Brazil)
                            </h4>
                            <p className="timeline-text">
                              Incomplete Bachelor's degree com computer science.
                              Progamming logic, algorithms, Mathematics and
                              Physics.
                            </p>
                          </div>
                          {/* <!-- Timeline education item --> */}
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h6 className="timeline-date">
                              <FontAwesomeIcon icon={faCalendarAlt} />
                              2009-2014
                            </h6>
                            <h4 className="timeline-title">
                              Economics | Mackenzie (Brazil)
                            </h4>
                            <p className="timeline-text">
                              Studies of Economics Science. Main topics:
                              Finance, History, Statistics, Econometrics.
                            </p>
                          </div>
                          {/* <!-- Timeline education item --> */}
                          {/* <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            2007-2009
                          </h6>
                          <h4 className="timeline-title">High School | Colégio Santo Américo (Brazil)</h4>
                          <p className="timeline-text">Graduated on a scholarship studying in one of the best education institutions of the country.</p>
                        </div> */}
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
                              <FontAwesomeIcon icon={faCalendarAlt} />
                              2018-to date
                            </h6>
                            <h4 className="timeline-title">
                              Cofounder | Masteradin
                            </h4>
                            <p className="timeline-text">
                              Process automation with Python. Growth oriented
                              Web Development. SEO, SEM, Social Media, Link
                              Building.
                            </p>
                          </div>
                          {/* <!-- Timeline education item --> */}
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h6 className="timeline-date">
                              <FontAwesomeIcon icon={faCalendarAlt} />
                              2014-2018
                            </h6>
                            <h4 className="timeline-title">
                              Business Intelligence Analyst | Unilever
                            </h4>
                            <p className="timeline-text">
                              Business Analytics. Investment analysis. Dashboard
                              development. Implementation of business tools.
                            </p>
                          </div>
                          {/* <!-- Timeline education item --> */}
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h6 className="timeline-date">
                              <FontAwesomeIcon icon={faCalendarAlt} />
                              2012-2013
                            </h6>
                            <h4 className="timeline-title">
                              Customer Marketing Intern | Unilever
                            </h4>
                            <p className="timeline-text">
                              Channel strategy. Visibility and Offers. Sales
                              Point Operations. Financial management.
                            </p>
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
                          {data.allWordpressWpCertificateItem.nodes.map(
                            node => (
                              <div className="certitication-item padd-15">
                                <div className="row time-details">
                                  <div className="row certification-date">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    {node.course_completion}
                                  </div>
                                  <div className="row certification-duration">
                                    <i className="fa fa-clock-o"></i>
                                    {node.course_duration}h
                                  </div>
                                </div>
                                <div className="row certification-details">
                                  <div className="row certification-image">
                                    <img
                                      src={
                                        node.featured_media.localFile
                                          .childImageSharp.fixed.src
                                      }
                                      alt={
                                        node.featured_media.localFile
                                          .childImageSharp.fixed.originalName
                                      }
                                    />
                                  </div>
                                  <div className="row certification-info">
                                    <Link
                                      to={node.blog_post}
                                      className="timeline-title"
                                    >
                                      {node.title}
                                    </Link>
                                    <p
                                      className="timeline-text"
                                      dangerouslySetInnerHTML={{
                                        __html: node.content,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="row certification-links">
                                  <Link
                                    to={node.blog_post}
                                    className="row related-blog-post"
                                  >
                                    <FontAwesomeIcon icon={faFileAlt} />
                                    Post
                                  </Link>
                                  <a
                                    href={node.certificate_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="row certificate"
                                  >
                                    <FontAwesomeIcon icon={faCertificate} />
                                    Certificate
                                  </a>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="all-certificates">
                      <Link
                        to="/about/certificates"
                        className="see-all-certificates"
                      >
                        <FontAwesomeIcon icon={faHandPointRight} />
                        See all certificates
                      </Link>
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

export default About

export const query = graphql`
  {
    allWordpressWpCertificateItem {
      nodes {
        short_name
        title
        content
        excerpt
        featured_media {
          localFile {
            childImageSharp {
              fixed(width: 300, height: 300) {
                src
                width
                height
                originalName
              }
            }
          }
        }
        teaching_institution
        course_link
        blog_post
        certificate_link
        course_completion
        course_duration
        is_priority_course
        featured_media {
          localFile {
            childImageSharp {
              fixed(width: 300, height: 300) {
                src
                width
                height
                originalName
              }
            }
          }
        }
      }
    }
  }
`
