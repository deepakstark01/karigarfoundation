// ProjectsSection.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Slider from './Slider';

const ProjectsSection = () => {
  const { project, title } = useSelector(state => state.project);

  return (
    <div className="w-full">
      {/* Loading State */}
      {!project || project.length === 0 ? (
        <div className="text-center py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded-md w-3/4 mx-auto mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-300 h-64 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="projects-section">
          <Slider 
            data={project} 
            title={title || "Our Projects"} 
            className="projects-slider"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;