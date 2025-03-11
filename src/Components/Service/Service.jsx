import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div id='service' className='services'>
        <div className="serv-t">
            <h1>Service</h1>
        </div>
        <div className="service-items">
            <div className="service-item">
                <h2>Web Development</h2>
                <p className="service-description">
                I craft fast, responsive, and scalable websites tailored to your needs. From sleek portfolios to complex web apps, 
                I ensure clean code, smooth navigation, and top-tier performance. Every site is optimized for speed, security, and seamless user experience
                </p>
            </div>
            <div className="service-item">
                <h2>Mobile App Development</h2>
                <p className="service-description">
                I design and develop high-performance mobile apps for iOS and Android. With a focus on smooth UX, scalability, and speed, I build apps that engage users and drive results.
                 Whether for startups or enterprises, I deliver seamless, innovative solutions.
                </p>
            </div>
            <div className="service-item">
                <h2>Graphic Design</h2>
                <p className="service-description">
                    I create visually compelling designs that enhance branding and user engagement. From logos and UI/UX design to marketing materials, 
                    I ensure every design is both aesthetically pleasing and functionally effective.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Service;
