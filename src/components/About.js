import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Hello! I'm a web developer passionate about creating beautiful, functional websites.</p>
            <p>With expertise in React, JavaScript, and modern CSS, I build responsive web applications that deliver great user experiences.</p>
          </div>
          <div className="about-image">
            <img src="https://tinyurl.com/32csu4hk" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;