import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Hello! I'm Reiven, an enthusiastic learner on the path to becoming a Full-Stack Developer.</p>
            <p>Currently building my skills in JavaScript, React, and Node.js through hands-on projects and continuous learning. I'm passionate about creating clean, functional web applications and am constantly expanding my knowledge of modern development practices.</p>
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