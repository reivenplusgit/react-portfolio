import React from 'react';
import { motion } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="modal-container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="modal-image-frame">
          <img 
            src={process.env.PUBLIC_URL + project.image} 
            alt={project.title} 
            className="modal-image"
          />
        </div>
        
        <div className="modal-content">
          <h3>{project.title}</h3>
          <p className="modal-description">{project.fullDescription}</p>
          
          <div className="modal-features">
            <h4>Key Features:</h4>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="modal-technologies">
            <h4>Technologies Used:</h4>
            <p>{project.technologies}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;