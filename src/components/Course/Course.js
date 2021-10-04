import React from 'react';
import './Course.css'
const Course = (props) => {
    const {course,price,duration,img} = props.course;
    return (
        <div className="col-lg-3 col-md-4">
            <div class="card mt-4 course-card shadow">
                <img class="card-img-top card-img" src={img} alt="course-img" />
                <div class ="card-body">
                <h2 class ="card-title">{course}</h2>
                <h4 class ="card-text">Price: {price}</h4>
                <p>Course duration : {duration}</p>
                </div>
            </div>  
        </div>
    );
};

export default Course;