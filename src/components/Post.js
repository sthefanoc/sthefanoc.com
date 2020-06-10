import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, withPrefix } from 'gatsby';

const Post =(props) => {
    return (
        <post className="blog-item padd-15">
            {/* <Link to={withPrefix(props.readMore)}> */}
                <div  className="blog-item padd-15">
                    <div className="blog-item-inner shadow-dark">
                        <div className="blog-img">
                            {props.image
                            ? <img src={props.image} alt={props.alt || 'defaulAlt'} />
                            : <br />}
                            <div className="blog-date" dangerouslySetInnerHTML={{__html: props.date.split('T')[0]}} />
                        </div>
                        <div className="blog-info">
                            <h4 className="blog-title" dangerouslySetInnerHTML={{__html: props.title}} />
                            <p className="blog-description" dangerouslySetInnerHTML={{__html: props.excerpt}} />
                            
                            <p className="blog-tags">Tags: 
                                {(props.keywords.split(', ').length = 1)
                                ? (<a href={props.keywords}>{props.keywords}</a>)
                                : (props.keywords.split(', ').length = 2)
                                    ? (<a href={props.keywords[0]}>{props.keywords[0]}</a>, 
                                    <a href={props.keywords[1]}>{props.keywords[1]}</a>)
                                    : (props.keywords.split(', ').length = 3)
                                    ? (<a href={props.keywords[0]}>{props.keywords[0]}</a>, 
                                        <a href={props.keywords[1]}>{props.keywords[1]}</a>, 
                                        <a href={props.keywords[2]}>{props.keywords[2]}</a>)
                                    : (<a href={props.keywords[0]}>{props.keywords[0]}</a>, 
                                        <a href={props.keywords[1]}>{props.keywords[1]}</a>, 
                                        <a href={props.keywords[2]}>{props.keywords[2]}</a>)
                                }
                            </p>
                        </div>
                    </div>
                </div>
            {/* </Link> */}
        </post>        
    )
}

export default Post;