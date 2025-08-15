import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: 'EcoTrack',
      shortDescription: 'Carbon footprint calculator web app',
      fullDescription: 'A comprehensive web application that calculates carbon footprint based on user activities. Features include personalized dashboards, historical data tracking, and eco-friendly tips. Built with responsive design for all devices.',
      technologies: 'HTML, CSS, JavaScript, Chart.js',
      image: '/images/eco-track.jpg',
      features: [
        'Interactive data visualization',
        'Personalized reduction tips',
        'Progress tracking over time'
      ]
    },
    {
      id: 2,
      title: 'RecipeFinder',
      shortDescription: 'Meal planning application',
      fullDescription: 'An intelligent recipe discovery platform that suggests meals based on dietary preferences and available ingredients. Includes meal planning functionality and nutritional information.',
      technologies: 'React, Bootstrap, Spoonacular API',
      image: '/images/recipe-finder.jpg',
      features: [
        'Dietary preference filters',
        'Ingredient-based search',
        'Weekly meal planner'
      ]
    },
    {
      id: 3,
      title: 'TaskMaster',
      shortDescription: 'Productivity dashboard',
      fullDescription: 'A comprehensive productivity suite combining task management with time-blocking techniques. Includes Pomodoro timer, priority tagging, and performance analytics.',
      technologies: 'React, Firebase, CSS3',
      image: '/images/task-master.jpg',
      features: [
        'Drag-and-drop interface',
        'Customizable Pomodoro timer',
        'Cross-device synchronization'
      ]
    }
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [bgColor, setBgColor] = useState('#f5f5f5'); // Default grey

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsla(${hue}, 15%, 95%, 1)`; // Light grey variations
  };

  const handleBackgroundClick = () => {
    setBgColor(getRandomColor());
  };

  return (
    <section 
      id="projects" 
      className="projects-section" 
      style={{ backgroundColor: bgColor }}
      onClick={handleBackgroundClick}
    >
      <div className="centered-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              whileHover={{ y: -5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="image-container">
                <img 
                  src={process.env.PUBLIC_URL + project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="short-description">{project.shortDescription}</p>
                <p className="technologies"><strong>Technologies:</strong> {project.technologies}</p>
                
                <button 
                  className="view-details-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;