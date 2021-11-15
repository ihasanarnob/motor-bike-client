import React from 'react';
import './Accessories.css';

import shop1 from '../../../Images/shop-1.jpg';
import shop2 from '../../../Images/shop-2.jpg';
import shop3 from '../../../Images/shop-3.jpg';
import shop4 from '../../../Images/shop-4.jpg';
import shop5 from '../../../Images/shop-5.jfif';
import { Card, Col, Row } from 'react-bootstrap';

const Accessories = () => {
    return (
        <div className="container my-3">
            <h2 className="mt-5 mb-3">Shop Accessories Item</h2>
            <Row xs={1} md={3} className="g-3">
                
                <Col>
                <Card>
                    <Card.Img variant="top" src={shop2} />
                    <Card.Body>
                    <Card.Title>Goggles & Gloves</Card.Title>
                    <Card.Text>
                        Price:$76
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={shop3} />
                    <Card.Body>
                    <Card.Title>Canvas Shoes</Card.Title>
                    <Card.Text>
                    Price:$80
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={shop5} />
                    <Card.Body>
                    <Card.Title>Mavericks Helmet</Card.Title>
                    <Card.Text>
                    Price:$69
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={shop1} />
                    <Card.Body>
                    <Card.Title>Driving Jacket</Card.Title>
                    <Card.Text>
                        Price : $100 
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={shop4} />
                    <Card.Body>
                    <Card.Title>ATV Tires</Card.Title>
                    <Card.Text>
                    Price:$60
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Accessories;