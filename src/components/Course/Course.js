import {Card, Col} from 'react-bootstrap';
import React from 'react';
import './Course.css'
const Course = (props) => {
    // course element destructured
    const {course,price,duration,img} = props.course;
    return (
        <Col style={{minHeight:'100%'}}>
            <Card className="course-card shadow">
            <Card.Img variant="top" className="card-img"  src={img} />
            <Card.Body>
                <Card.Title>{course}</Card.Title>
                <Card.Text className="mb-0 py-1">
                  Price : {price}$
                </Card.Text>
                <Card.Text className="py-1">
                   Course Duration : {duration}
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Course;