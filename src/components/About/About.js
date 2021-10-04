import React from 'react';
import {Row,Col} from 'react-bootstrap';
import aboutImg from '../../img/about.jpg'
const About = () => {
    return (
        <div className="about py-5">
            <h1 className="text-center mb-3">About Us</h1>
            <p className="text-center text-secondary lead pt-0 mt-0">English academy is a students friendly learning academy.In the whole world english is a language which you should be know.</p>
            <Row xs={1} md={2} className="g-2 mt-5">
             <Col>
               <img src={aboutImg} alt="" />
             </Col>
             <Col>
              <div className="p-4 ">
              <h2>Our activities</h2>
               <h3>1. Supportive</h3>
               <p className="lead">We’re here for you, to help you achieve a brighter future. Not just while you’re in the classroom but for your life beyond as well.</p>
               <h3>2. Connected</h3>
               <p className="lead">Learn English with us and we’ll take you on an exciting and fun journey, and make you feel part of our global family.</p>
               <h3>3. Motivated</h3>
               <p className="lead">Learning is a team effort, and we ensure your lessons are challenging and engaging. Work hard and we’ll help you achieve your ambitions.</p>
              </div>
             </Col>
            </Row>
        </div>
    );
};

export default About;