import React from 'react';
import BlogRelatedPosts from '../components/BlogRelatedPosts'; 
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import { Link } from 'gatsby';



const BlogPost =(props) => {
    const pluginOptions = {
        wordPressUrl: `http://wordpress.sthefanoc.com/`,
        uploadsUrl: `http://wordpress.sthefanoc.com/wp-content/uploads/`,
      };
    const baseUrl = 'https://sthefanoc.com/blog/';
    // const disqusShortname = 'sthefanoc';
    const disqusConfig = {
        identifier: props.slug,
        title: props.title,
        url: baseUrl + props.slug,
    };
    
    // https://blog.mailtrap.io/react-contact-form/
    // To configure e-mail

    return (
        <article>
            <div className="container">
                <div className="row">
                    <Link to="/blog" className="back-to-blog">
                        <i className="fa fa-arrow-circle-left" aria-hidden="true" />
                        <p>Back to Blog</p>
                    </Link>
                    
                    <div className="section-title">
                        <h1 dangerouslySetInnerHTML={{__html:props.title}}/>
                    </div>
                    <a href="#comment-count" className="commment-count">
                        <CommentCount config={disqusConfig} placeholder={'...'} />
                    </a>
                </div>
                <div className="row">
                    <div className="post-date">
                        {props.date}
                    </div>
                    <div className="share-buttons">
                        <a 
                            href={"https://facebook.com/sharer/sharer.php?u=" + baseUrl + props.slug + "/"} 
                            target="_blank" 
                            rel="noopenner noreferrer">
                                <i className="fa fa-facebook"></i></a>
                        <a 
                            href={"https://twitter.com/share?url=" + baseUrl + props.slug + "/" + "&text=" + props.title + "&via" + "twitterhandle"}
                            target="_blank"
                            rel="noopenner noreferrer">
                            <i className="fa fa-twitter"></i></a>
                        <a 
                            href={"https://www.linkedin.com/shareArticle?mini=true&url=" + baseUrl + props.slug + "/&title=" + props.title + '&summary=' + props.excerpt + "&source=sthefanoc.com"}
                            target="_blank"
                            rel="noopenner noreferrer">
                            <i className="fa fa-linkedin"></i></a>
                        <a 
                            href={"https://wa.me/?text=" + baseUrl + props.slug + "/"} 
                            target="_blank"
                            rel="noopenner noreferrer">
                            <i className="fa fa-whatsapp"></i></a>
                        {/* <a 
                            onClick={copyText(baseUrl + props.slug + "/")}>
                            <i className="fa fa-copy"></i></a> */}
                    </div>
                </div>
                <div className="row">
                    <div className="post-intro">
                        {/* <img className="intro-sub-element" src={props.image} alt={props.alt || 'defaulAlt'} /> */}
                        {/* <Img 
                            className="intro-sub-element" 
                            src={props.image} 
                            alt={props.alt || 'defaulAlt'}
                        /> */}
                        <img 
                            className="intro-sub-element" 
                            src={props.image} 
                            alt={props.alt || 'defaulAlt'}
                        />
                        <p className="post-excerpt intro-sub-element" dangerouslySetInnerHTML={{__html:props.excerpt}}/>
                    </div>
                </div>
                <div className="row blog-post-text" dangerouslySetInnerHTML={{__html:props.content}}/>
                {/* <div className="row blog-post-text">{contentParser( props.content , pluginOptions)}</div> */}
                <div className="row"></div>
                <div className="row">
                    <BlogRelatedPosts 
                        relatedPosts={props.morePosts}
                        />
                        
                </div>
                <div  id="comment-count" className="row">
                    <Disqus config={disqusConfig} />
                </div>
            </div>
        </article>
    )
}

export default BlogPost;

// export const query = graphql`
// {
//     allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "growth"}}}}) {
//       nodes {
//         slug
//         title
//         excerpt
//         date
//         featured_media {
//           source_url
//           slug
//         }
//         categories {
//           name
//           slug
//         }
//       }
//     }
//   }  
// `