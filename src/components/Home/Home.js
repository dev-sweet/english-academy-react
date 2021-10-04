import React from 'react';
import { useEffect,useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Home.css';
const Home = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./homeData.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);
    return (
        <div className="container py-5">
           <div className="banner pb-4 text-center">
               <h1 className="title">Welcoe to <span className="academy">English Academy</span></h1>
               <h2>Grow your skill with English Academy</h2>
           </div>
           <Row xs={1} md={4} className="g-4">
             {
                 courses.map(course => <Course key={course.id} course={course}/> )
             }
           </Row>
        </div>
    );
};

export default Home;