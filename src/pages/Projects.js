import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const allProjects = [
  {
    slug: 'sobha-seahaven',
    title: 'Sobha Seahaven',
    image: 'https://sobhaconstructions.com/source/uploads/2023/10/bh-th_20231013_e73c7.jpg',
    status: 'Ongoing'
  },
  {
    slug: 'waves-opulence',
    title: 'Waves Opulence',
    image: 'https://sobhaconstructions.com/source/uploads/2023/10/op-th_20231013_5974b.jpg',
    status: 'Ongoing'
  },
  {
    slug: 'sobha-hartland-ii',
    title: 'Sobha Hartland II',
    image: 'https://sobhaconstructions.com/source/uploads/2023/10/sh-th_20231013_9f1b4.jpg',
    status: 'Ongoing'
  },
  {
    slug: 'creek-vista-heights',
    title: 'Creek Vista Heights',
    image: 'https://sobhaconstructions.com/source/uploads/2024/07/2_20240722_2e2e0.png',
    status: 'Ongoing'
  },
  {
    slug: 'villas-phase-i',
    title: 'Villas Phase I',
    image: 'https://sobhaconstructions.com/source/uploads/2023/02/villas-a_20230224_21036.jpg',
    status: 'Completed'
  },
  {
    slug: 'villas-phase-ii',
    title: 'Villas Phase II',
    image: 'https://sobhaconstructions.com/source/uploads/2023/02/villas-b_20230224_84781.jpg',
    status: 'Completed'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('Ongoing');
  const filteredProjects = allProjects.filter(proj => proj.status === filter);

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Our Projects</h2>
      <div className="flex justify-center space-x-4 mb-8" data-aos="fade-up">
        <button onClick={() => setFilter('Ongoing')}
                className={`px-4 py-2 rounded ${filter === 'Ongoing' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>
          Ongoing
        </button>
        <button onClick={() => setFilter('Completed')}
                className={`px-4 py-2 rounded ${filter === 'Completed' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>
          Completed
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((proj, index) => (
          <ProjectCard key={proj.slug} project={proj} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
