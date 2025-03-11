import React from 'react';
import './Packages.css';

const Packages = () => {
  return (
    <div id='packages' className='packages'>
        <div className="packages-t">
            <h1>Service Packages</h1>
            <p className="packages-description">
                I offer on-demand web, mobile, and graphic design services with quick turnarounds—working 5 hours a day to ensure high-quality results within a short timeframe. 
                Whether you need a website, mobile app, UI/UX design, or backend development, I’ve got you covered.
            </p>
        </div>
        <div className="package-items">
            <div className="package-item">
                <h2>🚀 Basic Package – $25/hour</h2>
                <p>Best for small tasks and quick fixes.</p>
                <ul>
                    <li>✔ Website tweaks & optimizations</li>
                    <li>✔ UI/UX refinements</li>
                    <li>✔ Basic graphic design (logos, banners)</li>
                    <li>✔ Minor app updates</li>
                </ul>
            </div>
            <div className="package-item">
                <h2>⚡ Standard Package – $40/hour</h2>
                <p>For more advanced projects requiring custom development.</p>
                <ul>
                    <li>✔ Web & Mobile App Development (React, Flutter)</li>
                    <li>✔ Backend API Integration</li>
                    <li>✔ Custom UI/UX Design</li>
                    <li>✔ Performance & SEO Optimization</li>
                </ul>
            </div>
            <div className="package-item">
                <h2>🔥 Premium Package – $60/hour</h2>
                <p>For high-priority, complex projects with fast delivery.</p>
                <ul>
                    <li>✔ Full-Scale Web or Mobile App Development</li>
                    <li>✔ Advanced Features (E-commerce, Payments, Dashboards)</li>
                    <li>✔ Secure Backend Development (Node.js/Rust)</li>
                    <li>✔ API Integrations & Admin Panel</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Packages;