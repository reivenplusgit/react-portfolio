import React from 'react';
import { useState } from 'react';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: 'EcoTrack',
      description: 'Carbon footprint calculator web app',
      technologies: 'HTML, CSS, JavaScript',
      image: 'https://tinyurl.com/5n98cukc'
    },
    {
      id: 2,
      title: 'RecipeFinder',
      description: 'Meal planning application',
      technologies: 'React, Bootstrap',
      image: 'https://play-lh.googleusercontent.com/hFygWSfqgqZEVLVJ8jI_XsWnqRMj2d5bQQUfd8NM9LBxfJ0LPnlu6nYsLn_7mUGaNNk'
    },
    {
      id: 3,
      title: 'TaskMaster',
      description: 'Productivity dashboard',
      technologies: 'React, Firebase',
      image: 'https://tinyurl.com/bdz9wcfj'
    }
  ]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;