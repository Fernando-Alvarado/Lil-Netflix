import React from 'react';
//  Bootstrap Components
import {Card,Col} from 'react-bootstrap';

const SerieCard = ({name, image, id},seeSerieInfo) => {
    return(
        <Col>
        <Card style={{ width: '18rem' }} onClick={() => seeSerieInfo()}>
            <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default SerieCard;