import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Post =(props) => {
    return (
        <post>
            <div className="p-3">
                <Card >
                {props.image
                ? <Card.Img className="img-responsive rounded mh-70" variant="top" src={props.image} alt={props.alt || 'defaulAlt'} />
                : <br />}
                
                <Card.Body>
                    <Card.Title dangerouslySetInnerHTML={{__html: props.title}} />
                    <Card.Text>
                        <div dangerouslySetInnerHTML={{__html: props.excerpt}} />
                    </Card.Text>
                    <Button href={props.readMore} variant="warning">Read more...</Button>
                </Card.Body>
                </Card>
            </div>
        </post>
        
    )
}

export default Post;