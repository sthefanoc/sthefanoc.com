import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, withPrefix } from 'gatsby';
import BlogRelatedPosts from '../components/BlogRelatedPosts'; 
import { DiscussionEmbed } from 'disqus-react';


const BlogPost =(props) => {
    const baseUrl = 'https://sthefanoc.com/';
    const disqusShortname = 'sthefanoc';
    const disqusConfig = {
        identifier: props.slug,
        title: props.title,
        url: baseUrl + props.slug,
    }
    // const relatedPosts = data.allWordpressPost;
    // const copyText = (text) => {
    //     /* Select the text field */
    //     text.select();
    //     text.setSelectionRange(0, 99999); /*For mobile devices*/

    //     /* Copy the text inside the text field */
    //     document.execCommand("copy");

    //     /* Alert the copied text */
    //     alert("Copied the text: " + text.value);
    // }
    return (
        <article>
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h1 dangerouslySetInnerHTML={{__html:props.title}}/>
                    </div>
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
                            href={"https://www.linkedin.com/shareArticle?url=" + baseUrl + props.slug + "/"} 
                            target="_blank"
                            rel="noopenner noreferrer">
                            <i className="fa fa-linkedin"></i></a>
                        <a 
                            href={"whatsapp://send?text=" + baseUrl + props.slug + "/"} 
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
                        <img src={props.image} alt={props.alt || 'defaulAlt'} />
                        <p className="post-excerpt" dangerouslySetInnerHTML={{__html:props.excerpt}}/>
                    </div>
                </div>
                <div className="row blog-post-text" dangerouslySetInnerHTML={{__html:props.content}}/>
                <div className="row"></div>
                <div className="row">
                    <BlogRelatedPosts 
                        relatedPosts={props.morePosts}
                        />
                        
                </div>
                <div className="row">
                    <DiscussionEmbed 
                        shortname={disqusShortname}
                        config={disqusConfig}
                    />
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