import Layout from '/components/layout';
import React from 'react';

const projectData = [
  {
    date: 'Aug 2023',
    name: 'autocomp.js',
    link: 'https://github.com/knadh/autocomp.js',
    description: 'A super tiny Javascript autocomplete / autosuggestions library. Zero dependencies, ~800 bytes min+gzip.'
  },
  {
    date: 'Aug 2023',
    name: 'autocomp.js',
    link: 'https://github.com/knadh/autocomp.js',
    description: 'A super tiny Javascript autocomplete / autosuggestions library. Zero dependencies, ~800 bytes min+gzip.'
  },
  {
    date: 'Aug 2023',
    name: 'autocomp.js',
    link: 'https://github.com/knadh/autocomp.js',
    description: 'A super tiny Javascript autocomplete / autosuggestions library. Zero dependencies, ~800 bytes min+gzip.'
  },
  {
    date: 'Aug 2023',
    name: 'autocomp.js',
    link: 'https://github.com/knadh/autocomp.js',
    description: 'A super tiny Javascript autocomplete / autosuggestions library. Zero dependencies, ~800 bytes min+gzip.'
  },
  {
    date: 'Aug 2023',
    name: 'autocomp.js',
    link: 'https://github.com/knadh/autocomp.js',
    description: 'A super tiny Javascript autocomplete / autosuggestions library. Zero dependencies, ~800 bytes min+gzip.'
  },
  {
    date: 'Aug 2023',
    name: 'autocomp.js',
    link: 'https://github.com/knadh/autocomp.js',
    description: 'A super tiny Javascript autocomplete / autosuggestions library. Zero dependencies, ~800 bytes min+gzip.'
  },
  {
    date: 'Aug 2023',
    name: 'autocomp.js',
    link: 'https://github.com/knadh/autocomp.js',
    description: 'A super tiny Javascript autocomplete / autosuggestions library. Zero dependencies, ~800 bytes min+gzip.gfdgdfgdfgdfgdgdfgdfgdf  sgsdfgadfgasefgdf d'
  },
  // Add more projects as needed
];

const Projects = () => {
    return (
      <Layout>
        <div className="p-5">
          <h2 className="text-3xl md:text-5xl text-black-500 mb-8">Projects on <a className="text-red-500" href='https://github.com/arjunprakash027'>Github</a></h2>
          <ul className="list-disc space-y-4 leading-5 text-base">
            {projectData.map((project, index) => (
              <li key={index} className="mb-6 md:mb-8">
                <div className="text-gray-500 text-sm md:text-2xl mb-2">
                  {project.date}
                </div>
                <div>
                  <a href={project.link} className="text-blue-500 hover:underline text-lg md:text-2xl font-bold">
                    {project.name}
                  </a>
                </div>
                <div className="text-gray-700 mt-2 md:text-2xl">
                  {project.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  };

  
export default Projects;
