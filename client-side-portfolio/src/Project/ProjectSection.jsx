import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import AboutBg from '../../public/image/about.png';
import { Spinner } from 'reactstrap'; 
import { Link } from 'react-router-dom'; 

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [hasError, setHasError] = useState(false); 
  const [showAllProjects, setShowAllProjects] = useState(false);

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

       
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner style={{ width: "3rem", height: "3rem" }} />
          </div>
        ) : hasError ? (
          <div className="text-red-500">Error fetching projects. Please try again later.</div>
        ) : (
          <div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {displayedProjects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>

            
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
