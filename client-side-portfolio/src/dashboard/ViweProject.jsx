import { useState } from 'react';
import ProjectCards from './ProjectCards';


const ViweProject = () => {
  const [projects, setProjects] = useState([]);
  fetch("https://portfolio-w7p2.vercel.app/project", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors"
  })
    .then((response) => response.json())
    .then((data) =>
     
     setProjects(data))
  
    .catch((error) => console.error("Error:", error));
  
  // console.log(projects)
  return (
    <div className="container gap-5 grid grid-cols-3 mx-auto p-4">
 {
  projects.map((project) => (
   <ProjectCards project={project} key={project._id}></ProjectCards>
  ))
}
    </div>
  );
};

export default ViweProject;
