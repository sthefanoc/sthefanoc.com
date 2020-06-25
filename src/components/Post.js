import React from 'react';
import { Link, withPrefix } from 'gatsby';

const Post =(props) => {
    const kws = Object.values(props.keywords);
    const kwsSlugs = Object.values(props.categories);

    let k=-1;

    return (
        <article className="blog-item padd-15" key={`blog-${props.readMore}`}>
            <div className="blog-item-inner shadow-dark">
                <Link to={withPrefix(`blog/${props.readMore}`)}>
                    <div className="blog-img">
                        {props.image
                        ? <img src={props.image} alt={props.alt || 'defaulAlt'} />
                        : <br />}
                        <div className="blog-date" dangerouslySetInnerHTML={{__html: props.date}} />
                    </div>
                </Link>
                <div className="blog-info">
                    <Link to={withPrefix(`blog/${props.readMore}`)}>
                        <h4 className="blog-title" dangerouslySetInnerHTML={{__html: props.title}} />
                        <p className="blog-description" dangerouslySetInnerHTML={{__html: props.excerpt}} />
                    </Link>
                    
                    <p className="blog-tags">Tags: 
                        {kws.map(item => {
                            k++;
                            return (<Link to={'blog/' + kwsSlugs[k]} key={kwsSlugs[k]}> {item} |</Link>)}
                        )}
                    </p>
                    
                </div>
            </div>
        </article>        
    )
}

export default Post;