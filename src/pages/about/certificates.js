import React,  { Component } from "react";
import PrimaryLayout from '../../layouts/PrimaryLayout';
import { Link, withPrefix } from 'gatsby';

class Certificates extends Component {
  render(){
    return(
      <PrimaryLayout>
        <section className="certificates section" id="certificates">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h1>Certificates</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="certifications padd-15">
                        <h3 className="title">Complete list</h3>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </PrimaryLayout>
    )
  }
}

export default Certificates;
