import React, { Component } from 'react';
import { Link, withPrefix } from 'gatsby';

class BlogRelatedPosts extends Component {
    render(){
        const data = this.props.relatedPosts;
        return (
            <div className="related-posts">
                {data.length ?
                <h3>Other posts you may like...</h3>
                : <h3 className="hidden">No related posts available</h3>}
                {data.map(node => (
                Boolean(node.title)
                ? 
                (<article className="related-post padd-15" key={node.slug}>
                    <div className="related-post-inner shadow-dark">
                        <Link to={withPrefix(`blog/${node.slug}`)}>
                            <div className="related-post-img">
                                {node.featured_media
                                ? <img src={node.featured_media.localFile.childImageSharp.fixed.src} alt={node.featured_media.localFile.childImageSharp.fixed.originalName || 'defaulAlt'} />
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