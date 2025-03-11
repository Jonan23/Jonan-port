import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div id='serv' className='services'>
        <div className="serv-t">
            <h1>Service</h1>
            <div className="service-items">
                <div className="service-item">
                    <h2>Web Development</h2>
                    <p className="service-description">
                      I specialize in web and mobile app development, delivering modern, efficient, and user-friendly solutions. 
                      From custom websites to feature-rich mobile apps and robust backend systems, I ensure seamless functionality and top-tier performance.
                    </p>
                </div>
                <div className="service-item">
                    <h2>Mobile App Development</h2>
                    <p className="service-description">
                      With a focus on clean code, scalability, and innovation, I turn ideas into reality. Let’s build something exceptional.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Service;
