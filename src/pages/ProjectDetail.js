import React from 'react';
import { useParams } from 'react-router-dom';

const projectData = {
  'sobha-seahaven': {
    title: "Sobha Seahaven",
    image: "https://sobhaconstructions.com/source/uploads/2023/10/bh-th_20231013_e73c7.jpg",
    description: "Detailed description of Sobha Seahaven project...",
    status: "Ongoing"
  },
  'waves-opulence': {
    title: "Waves Opulence",
    image: "https://sobhaconstructions.com/source/uploads/2023/10/op-th_20231013_5974b.jpg",
    description: "Detailed description of Waves Opulence project...",
    status: "Ongoing"
  },
  'sobha-hartland-ii': {
    title: "Sobha Hartland II",
    image: "https://sobhaconstructions.com/source/uploads/2023/10/sh-th_20231013_9f1b4.jpg",
    description: "Detailed description of Sobha Hartland II project...",
    status: "Ongoing"
  },
  'creek-vista-heights': {
    title: "Creek Vista Heights",
    image: "https://sobhaconstructions.com/source/uploads/2024/07/2_20240722_2e2e0.png",
    description: "Detailed description of Creek Vista Heights project...",
    status: "Ongoing"
  },
  'villas-phase-i': {
    title: "Villas Phase I",
    image: "https://sobhaconstructions.com/source/uploads/2023/02/villas-a_20230224_21036.jpg",
    description: "Detailed description of Villas Phase I project...",
    status: "Completed"
  },
  'villas-phase-ii': {
    title: "Villas Phase II",
    image: "https://sobhaconstructions.com/source/uploads/2023/02/villas-b_20230224_84781.jpg",
    description: "Detailed description of Villas Phase II project...",
    status: "Completed"
  }
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="py-12 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <p>The project you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="py-12 px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-6" />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
