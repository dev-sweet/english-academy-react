import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./About.css";
import aboutImg from "../../img/student.png";
import about1 from "../../img/about1.jpg";
import about2 from "../../img/about2.jpg";
import about3 from "../../img/about3.jpg";

const About = () => {
  const aboutData = [
    {
      title: "Our Mission",
      img: about1,
      descripttion:
        "We’re here for you, to help you achieve a brighter future. Not just while you’re in the classroom but for your life beyond as well.Learn English with us and we’ll take you on an exciting and fun journey, and make you feel part of our global family.",
    },
    {
      title: "Our Activity",
      img: about2,
      descripttion:
        "Learn English with us and we’ll take you on an exciting and fun journey, and make you feel part of our global family.However, with The English Studio you can expect more. We’ll go beyond your expectations and work with you to understand your ambitions and aspirations",
    },
    {
      title: "Our Vision",
      img: about3,
      descripttion:
        "However, with The English Studio you can expect more. We’ll go beyond your expectations and work with you to understand your ambitions and aspirations English Studio you can expect more.",
    },
  ];
  return (
    <div className="about py-5">
      <Container>
        <h4 className="text-center">Welcome to</h4>
        <h1 className="about-title text-center">English Academy</h1>
        <Row className="g-2 mt-5">
          <Col md={7} className="">
            {aboutData.map((data) => (
              <div className="d-flex align-items-center my-4">
                <div className="about-img">
                  <div className="border rounded-circle">
                    <img
                      className="rounded-circle border m-1"
                      src={data.img}
                      alt=""
                    />
                  </div>
                </div>
                <div className="about-info pe-5 mx-5">
                  <h3 className="about-title">{data.title}</h3>
                  <p>{data.descripttion}</p>
                </div>
              </div>
            ))}
          </Col>
          <Col md={5}>
            <img className="img-fluid mx=auto" src={aboutImg} alt="about-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
