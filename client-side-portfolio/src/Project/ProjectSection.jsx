import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import AboutBg from '../../public/image/about.png';
import { Spinner } from 'reactstrap'; // Importing Spinner from reactstrap for loading spinner
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [hasError, setHasError] = useState(false); // Track error state
  const [showAllProjects, setShowAllProjects] = useState(false); // Track if "View All Projects" is clicked

  useEffect(() => {
    fetch('https://server-site-portfolio-7mtdx1ohr-rihan2045s-projects-8a229069.vercel.app/project')
      .then((res) => res.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : [data]);
        setIsLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => {
        setIsLoading(false);
        setHasError(true); // Set error state if there's an issue
        console.error('Error fetching projects:', error);
      });
  }, []);

  // Logic to show all projects or just the first 3
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section
      className="py-12"
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto text-center">
        <div className="text-center py-8">
          <h2 className="text-4xl font-bold text-white uppercase relative inline-block">
            My Projects
            <span className="block h-1 w-16 bg-blue-500 mx-auto mt-2"></span>
          </h2>
        </div>

        {/* Display loading spinner while data is being fetched */}
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner style={{ width: "3rem", height: "3rem" }} />
          </div>
        ) : hasError ? (
          <div className="text-red-500">Error fetching projects. Please try again later.</div>
        ) : (
          <div>
            {/* Display projects in a grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {displayedProjects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>

            {/* Conditionally display the "View All Projects" link if there are more than 3 projects */}
            {projects.length > 3 && !showAllProjects && (
              <div className="mt-8">
                <Link to="/viweProjects" className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-block">
                  View All Projects
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
