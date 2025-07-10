import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
  const animation = index % 2 === 0 ? "fade-right" : "fade-left";

  return (
    <Link to={`/project/${project.slug}`}>
      <div className="border rounded overflow-hidden shadow hover:shadow-lg transition duration-300" data-aos={animation}>
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="text-sm text-gray-500">{project.status}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
