import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, withPrefix } from 'gatsby';

class BlogRelatedPosts extends Component {
    render(){
        const data = this.props.relatedPosts;
        return (
            <div className="related-posts">
                <h3>Other posts you may like...</h3>
                {data.map(node => (
                Boolean(node.title)
                ? 
                (<article className="related-post padd-15" key={node.slug}>
                    <div className="related-post-inner shadow-dark">
                        <Link to={withPrefix(`blog/${node.slug}`)}>
                            <div className="related-post-img">
                                {node.featured_media
                                ? <img src={node.featured_media.source_url} alt={node.featured_media.slug || 'defaulAlt'} />
                                : <br />}
                                <div className="related-post-date" dangerouslySetInnerHTML={{__html: node.date}} />
                            </div>
                            <div className="related-post-info">
                                <h4 className="related-post-title" dangerouslySetInnerHTML={{__html: node.title}} />
                                <p className="related-post-description" dangerouslySetInnerHTML={{__html: node.excerpt}} />
                                
                            </div>
                        </Link>
                    </div>
                </article>)
                :
                (<div>Nooooo</div>)
            ))}
            </div>      
        )
    }
}

export default BlogRelatedPosts;

// BlogRelatedPosts.propTypes = {
//     data: PropTypes.object.isRequired,
//     edges: PropTypes.array,
// }

// export const relatedPostsQuery = graphql`
//     query relatedPosts{
//         allWordpressPost {
//             edges {
//                 node{
//                     title
//                     excerpt
//                     slug
//                     date
//                     featured_media{
//                         source_url
//                         slug
//                     }
//                     categories {
//                         name
//                         slug
//                     }
//                 }
//             }
//         }
//     }  
// `
// export const query = graphql`
// {
//   allWordpressPost {
//     nodes {
//       slug
//       title
//       excerpt
//       date (formatString: "MMMM DD, YYYY")
//       featured_media {
//         source_url
//         slug
//       }
//       categories {
//         name
//         slug
//       }
//     }
//   }
// }
// ` 

// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import { Link, withPrefix } from 'gatsby';

// const BlogRelatedPosts =(props) => {
//     return (
//         <div>
//             <h1>Related posts!</h1>
//             <div>{props.title}</div>
//         </div>      
//     )
// }

// export default BlogRelatedPosts;