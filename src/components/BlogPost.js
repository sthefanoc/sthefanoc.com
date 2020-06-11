import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, withPrefix } from 'gatsby';
import BlogRelatedPosts from '../components/BlogRelatedPosts';


const BlogPost =(props) => {
    // const relatedPosts = data.allWordpressPost;
    return (
        <post>
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
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-whatsapp"></i></a>
                        <a href="#"><i class="fa fa-copy"></i></a>
                    </div>
                </div>
                <div className="row">
                    <div className="post-image">
                        <img src={props.image} alt={props.alt || 'defaulAlt'} />
                    </div>
                    <div className="post-excerpt" dangerouslySetInnerHTML={{__html:props.excerpt}}/>
                </div>
                <div className="row" dangerouslySetInnerHTML={{__html:props.content}}/>
                <div className="row"></div>
                <div className="row">
                    <BlogRelatedPosts 
                        relatedPosts={props.morePosts}
                        />
                        
                </div>
            </div>
        </post>
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