import React,  { Component } from "react";
import PrimaryLayout from '../../layouts/PrimaryLayout';
import { Link, withPrefix } from 'gatsby';

const Certificates = ({data}) => {
    console.log(data)
    return(
      <PrimaryLayout>
        <section className="certificates section" id="certificates">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h1>Certificates</h1>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="search-box">
                        Search container
                    </div>
                </div> */}
                <div className="row">
                    {/* <!-- Certificate item start --> */}
                    {data.allWordpressWpCertificateItem.nodes.map(node => (
                      <div className="certificate-container">
                        <div className="certificate-box-item">
                          <div className="certificate-preview">
                            <img src={node.featured_media.localFile.childImageSharp.fixed.src} alt={node.featured_media.localFile.childImageSharp.fixed.originalName} />
                            <p>{node.teaching_institution}</p>
                            <h2>{node.short_name}</h2>
                            <a href={node.course_link} rel="external" target="_blank">Course link <i className="fa fa-hand-o-right"></i></a>
                          </div>
                          <div className="certificate-details">
                            <div className="progress-container">
                              <div className="certificate-hours">
                                {node.course_duration} hours
                              </div>
                              <div className="clocks">
                                <i className="fa fa-clock-o" />
                                {/* {(<i className="fa fa-clock-o" />)? [].push((<i className="fa fa-clock-o" />)) : 'no'} */}
                              </div>
                            </div>
                            <h6>{node.course_completion}</h6>
                            <h2>{node.title}</h2>
                            <p dangerouslySetInnerHTML={{__html: node.content}}/>
                            {/* <a href={node.featured_media.localFile.childImageSharp.fixed.src} target="_blank" rel="noopener noreferrer"><button className="btn">Certificate</button></a> */}
                            
                            <div className="certificate-btns">
                              {node.blog_post ? 
                              <Link to={node.blog_post} target="_blank" rel="noopener noreferrer"><button className="btn certificate-blog-post">BlogPost</button></Link>
                              : ''
                              }
                              
                              <a href={node.certificate_link} target="_blank" rel="noopener noreferrer"><button className="btn certificate-link">Certificate</button></a>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    ))}
                    


                    {/* <div className="certificate-box-item shadow-dark padd-15">
                      <div className="row certitificate-image">
                        <img src={withPrefix('portfolio/1.jpg')} alt="Project #1" />
                      </div>
                      <div className="row certificate-details">
                        <div className="row certification-time">
                            <div className="row certification-date"><i className="fa fa-calendar"></i>Jun 2020</div> 
                            <div className="row certification-duration"><i className="fa fa-clock-o"></i>100h</div> 
                        </div>
                        <div className="row certification-details">
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
                    </div> */}
                    {/* <!-- Certificate item end --> */}
                </div>
            </div>
        </section>

    </PrimaryLayout>
    )
  }

export default Certificates;


export const query = graphql`
{
    allWordpressWpCertificateItem{
      nodes{
        short_name
        title
        content
        excerpt
        featured_media{
          localFile{
            childImageSharp{
              fixed(width:300, height: 300){
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
        featured_media{
          localFile{
            childImageSharp{
              fixed(width:300, height: 300){
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