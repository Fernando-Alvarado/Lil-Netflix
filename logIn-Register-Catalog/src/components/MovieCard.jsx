import React from 'react';
//  Bootstrap Components
import {Card,Col} from 'react-bootstrap';

const MovieCard = ({name,image,id,seeMovieInfo}) => {
    return(
        <Col>
        <Card style={{ width: '18rem' }} onClick={() => seeMovieInfo()}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
        </Col>
    )
};

export default MovieCard;