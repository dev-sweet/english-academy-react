import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
           <div className="row">
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
           </div>
        </div>
    );
};

export default Services;