import React from 'react';
import Project from '../components/Project';
import '../assets/styles/Portfolio.css';

// Array of project objects to be displayed in the portfolio
const projects = [
  {
    title: 'Project One',
    image: '../assets/imgs/project1.png',
    deployedLink: 'https://example.com/project1',
    repoLink: 'https://github.com/username/project1'
  },
  {
    title: 'Project Two',
    image: '../assets/imgs/project2.png',
    deployedLink: 'https://example.com/project2',
    repoLink: 'https://github.com/username/project2'
  },
  {
    title: 'Project Three',
    image: '../assets/imgs/project3.png',
    deployedLink: 'https://example.com/project3',
    repoLink: 'https://github.com/username/project3'
  },
  {
    title: 'Project Four',
    image: '../assets/imgs/project4.png',
    deployedLink: 'https://example.com/project4',
    repoLink: 'https://github.com/username/project4'
  },
  {
    title: 'Project Five',
    image: '../assets/imgs/project5.png',
    deployedLink: 'https://example.com/project5',
    repoLink: 'https://github.com/username/project5'
  },
  // Add more projects as needed
];

function Portfolio() {
  return (
    <section className="portfolio">
      {/* Map over the projects array to render a Project component for each project */}
      {projects.map((project, index) => (
        <Project
          key={index} // Unique key for each Project component
          title={project.title} // Project title
          image={project.image} // Project image
          deployedLink={project.deployedLink} // Link to deployed project
          repoLink={project.repoLink} // Link to project's GitHub repository
        />
      ))}
    </section>
  );
}

export default Portfolio;
