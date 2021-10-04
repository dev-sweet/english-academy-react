import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Services = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    return (
        <div className="container py-5">
        <h1 className="text-center">Total Services : {courses.length}</h1>
        <Row xs={1} md={4} className="g-4 mt-4">
             {
                 courses.map(course => <Course key={course.id} course={course}/> )
             }
         </Row>
        </div>
    );
};

export default Services;