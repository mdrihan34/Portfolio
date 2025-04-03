import { useState, useEffect } from 'react';
import AboutBg from '../../public/image/about.png'; // Background image for the section
import { Spinner } from 'reactstrap';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch('https://portfolio-w7p2.vercel.app/project')
      .then((res) => res.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : [data]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setHasError(true);
        console.error('Error fetching projects:', error);
      });
  }, []);

  // ProjectCard Component (directly inside Project.jsx)
  const ProjectCard = ({ project }) => {
    return (
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        {/* Project Landing Photo as an img */}
        <div className="w-full  mb-4 relative">
          <img
            src={project.landingPhoto}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-semibold mb-2 text-blue-400 text-left">{project.title}</h3>

        {/* Project Links: Code and Live Demo */}
        <div className="mb-4 text-left">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition duration-300 mr-4"
          >
            Live Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition duration-300"
          >
            View Code
          </a>
        </div>

        {/* Project Description */}
        <p className="text-gray-300 mb-4 text-left">{project.description}</p>

        {/* Key Features */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-left">Key Features:</h4>
          <ul className="list-disc pl-5 text-gray-400 text-left">
            <li>{project.feature1}</li>
            <li>{project.feature2}</li>
            <li>{project.feature3}</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section
      className="py-12"
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto text-center">
        <div className="text-center py-8">
          <h2 className="text-4xl font-bold text-white uppercase relative inline-block">
            My Projects
            <span className="block h-1 w-16 bg-blue-500 mx-auto mt-2"></span>
          </h2>
        </div>

        {/* Loading Spinner */}
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner style={{ width: '3rem', height: '3rem' }} />
          </div>
        ) : hasError ? (
          <div className="text-red-500">Error fetching projects. Please try again later.</div>
        ) : (
          <div>
            {/* Render projects in one column (line by line) */}
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
