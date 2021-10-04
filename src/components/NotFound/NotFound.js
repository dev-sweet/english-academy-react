import React from 'react';
import img from '../../img/not-found.jpg';
const NotFound = () => {
    return (
        <div className="text-center">
            <img className="w-100" style={{maxHeight:'100%'}} src={img} alt="" />
        </div>
    );
};

export default NotFound;