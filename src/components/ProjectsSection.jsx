// ProjectsSection.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Slider from './Slider';

const ProjectsSection = () => {
  const { project, title } = useSelector(state => state.project);
  
  return (
    <div>
      <Slider data={project} title={title} />
    </div>
  );
};

export default ProjectsSection;