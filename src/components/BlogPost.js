import React from "react"
import BlogRelatedPosts from "../components/BlogRelatedPosts"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLongArrowAltLeft,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faGoogle,
  faReact,
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import ReactTooltip from "react-tooltip"

const BlogPost = props => {
  const pluginOptions = {
    wordPressUrl: `http://wordpress.sthefanoc.com/`,
    uploadsUrl: `http://wordpress.sthefanoc.com/wp-content/uploads/`,
  }
  const baseUrl = "https://sthefanoc.com/blog/"

  const disqusConfig = {
    identifier: props.slug,
    title: props.title,
    url: baseUrl + props.slug,
  }

  setTimeout(function () {
    window.onscroll = function () {
      scrollFunction()
    }
  }, 5000)

  function scrollFunction() {
    try {
      let mybutton = document.getElementById("topBtn")
      if (
        document.body.scrollTop > 350 ||
        document.documentElement.scrollTop > 350
      ) {
        mybutton.style.display = "block"
      } else {
        mybutton.style.display = "none"
      }
      // console.log('success!', mybutton)
    } catch {
      let mybutton = document.getElementById("topBtn")
      // console.log('fail!', mybutton)
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function toTheTop() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <article>
      <div className="container">
        {/* <button onClick={console.log('aahskbdlkhasb')} id="topBtn" title="Go to top">Top</button> */}
        <button onClick={() => toTheTop()} id="topBtn">
          <FontAwesomeIcon icon={faArrowUp} data-tip="To the top!" />
        </button>
        <div className="row">
          <Link to="/blog" className="back-to-blog">
            {/* <i className="fa fa-arrow-circle-left" aria-hidden="true" /> */}
            <ReactTooltip />
            <FontAwesomeIcon
              icon={faLongArrowAltLeft}
              aria-hidden="true"
              data-tip="Back to blog"
            />
            {/* <p>Back to Blog</p> */}
          </Link>

          <div className="section-title padd-15">
            <h1
              dangerouslySetInnerHTML={{ __html: props.title }}
              className="blog-post-title"
            />
          </div>
          <a
            href="#comment-count"
            className="commment-count padd-15"
            data-tip="See comments"
          >
            <CommentCount config={disqusConfig} placeholder={"..."} />
          </a>
        </div>
        <div className="row">
          <div className="post-date">{props.date}</div>
          <div className="share-buttons">
            <a
              href={
                "https://facebook.com/sharer/sharer.php?u=" +
                baseUrl +
                props.slug +
                "/"
              }
              target="_blank"
              rel="noopenner noreferrer"
            >
              {/* <i className="fa fa-facebook"></i> */}
              <FontAwesomeIcon data-tip="Share on Facebook" icon={faFacebook} />
            </a>
            <a
              href={
                "https://twitter.com/share?url=" +
                baseUrl +
                props.slug +
                "/" +
                "&text=" +
                props.title +
                "&via" +
                "twitterhandle"
              }
              target="_blank"
              rel="noopenner noreferrer"
            >
              {/* <i className="fa fa-twitter"></i> */}
              <FontAwesomeIcon data-tip="Share on Twitter" icon={faTwitter} />
            </a>
            <a
              href={
                "https://www.linkedin.com/shareArticle?mini=true&url=" +
                baseUrl +
                props.slug +
                "/&title=" +
                props.title +
                "&summary=" +
                props.excerpt +
                "&source=sthefanoc.com"
              }
              target="_blank"
              rel="noopenner noreferrer"
            >
              {/* <i className="fa fa-linkedin"></i> */}
              <FontAwesomeIcon data-tip="Share on LinkedIn" icon={faLinkedin} />
            </a>
            <a
              href={"https://wa.me/?text=" + baseUrl + props.slug + "/"}
              target="_blank"
              rel="noopenner noreferrer"
            >
              {/* <i className="fa fa-whatsapp"></i> */}
              <FontAwesomeIcon data-tip="Share on WhatsApp" icon={faWhatsapp} />
            </a>
            {/* <a 
                            onClick={copyText(baseUrl + props.slug + "/")}>
                            <i className="fa fa-copy"></i></a> */}
          </div>
        </div>
        <div className="row">
          <div className="post-intro">
            {/* <img clasThis is an imagerc={props.image} 
                            alt={props.alt || 'defaulAlt'}
                        /> */}
            <img
              className="intro-sub-element"
              src={props.image}
              alt={props.alt || "defaulAlt"}
            />
            <p
              className="post-excerpt intro-sub-element"
              dangerouslySetInnerHTML={{ __html: props.excerpt }}
            />
          </div>
        </div>
        <div
          className="row blog-post-text padd-15"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        {/* <div className="row blog-post-text">{contentParser( props.content , pluginOptions)}</div> */}
        <div className="row"></div>
        <div className="row">
          <BlogRelatedPosts relatedPosts={props.morePosts} />
        </div>
        <div id="comment-count" className="row">
          <Disqus config={disqusConfig} />
        </div>
      </div>
    </article>
  )
}

export default BlogPost

// {
//     allWordpressWpMedia(filter: {wordpress_id: {eq: 104}}) {
//       edges {
//         node {
//           title
//           wordpress_id
//         }
//       }
//     }

// }
