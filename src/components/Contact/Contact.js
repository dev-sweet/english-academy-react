import React from 'react';
import { Col, Form, Row ,FloatingLabel,Button} from 'react-bootstrap';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact py-5">
            <h1 className="text-center">Contact With Us</h1>
            <div className="w-50 mx-auto">
                <Row className=" g-3" xs={1} md={2}>
                    <Col>
                        <Form.Control className="contact-form" size="md" type="text" placeholder="Your Name" />
                    </Col>
                    <Col>
                        <Form.Control className="contact-form" size="md" type="text" placeholder="Your Email" />
                    </Col>
                </Row>
                <Form.Control className="contact-form" size="md" type="text" placeholder="Subject" />
                <FloatingLabel controlId="floatingTextarea" label="Message"  className="mb-3">
                    <Form.Control className="contact-form" as="textarea" style={{ height: '170px' }} placeholder="Write message here..." />
                </FloatingLabel>
                <div className="text-center">
                    <Button size="lg" className="mx-auto submit">Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;