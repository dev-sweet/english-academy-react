import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer py-4">
            <div className="container footer-container">
                <h2 className="footer-title">English Academy</h2>
                <div className="d-flex">
                    <p className="text-right footer-text"  style={{textAlign:'right'}}>
                        San Francisco, CA 94102, US
                        <br />  
                        1234 Some St
                    </p>
                    <p className="text-left footer-text">
                        Phone: 800 123 4567
                        <br />
                        Fax: 1.800.123.4566
                    </p>
                    
                </div>
                <p className="text-center">&copy; 2021 All Rights Reserved </p>
            </div>
        </div>
    );
};

export default Footer;