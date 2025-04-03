
import { useState } from "react";


const DashHome = () => {
    const [projects, setProjects] = useState([]);
  
    // Fetching the projects from the server
    fetch('https://server-site-portfolio-7mtdx1ohr-rihan2045s-projects-8a229069.vercel.app/project')
    .then((res) => res.json())
    .then((data) => {
    
      setProjects(Array.isArray(data) ? data : [data]);
    })
    .catch((error) => console.error('Error fetching projects:', error));
  return (
    <div className="flex w-full flex-col lg:flex-row min-h-screen bg-black text-white">
    {/* Sidebar */}
  

    {/* Main Content */}
    <div className="p-6 w-full lg:w-3/4">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100 text-center lg:text-left">Welcome to Your Dashboard</h1>
      <p className="text-md md:text-lg text-gray-400 text-center lg:text-left">Manage your portfolio and projects from here.</p>

      {/* Profile Section */}
      <div className="mt-6 p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900 w-full">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100">Profile Information</h2>
        <p><strong>Name:</strong> MD Ismail Ahmed Rihan</p>
        <p><strong>Role:</strong> MERN Stack Developer</p>
        <p><strong>Email:</strong>rihanwebdev@gmail.com</p>
      </div>

      {/* Skills Section */}
      <div className="mt-6 p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900 w-full">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100">Skills</h2>
        <p className="mt-2 text-gray-300">HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, API Development, User Authentication</p>
      </div>

      {/* Projects Section */}
      <div className="mt-6 p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900 w-full">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100">Recent Projects</h2>
        <ul className="list-disc ml-4 mt-2 text-gray-300">
{
  projects.map((project) =>(<li key={project._id}>{project.title}</li>))
}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="mt-6 p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900 w-full">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100">Contact</h2>
        <p className="mt-2 text-gray-300">Feel free to reach out via email or social media.</p>
        <p><strong>Email: </strong>rihanwebdev@gmail.com</p>
        <p><strong>LinkedIn: </strong>https://www.linkedin.com/in/rihan01/</p>
        <p><strong>GitHub:</strong>https://github.com/mdrihan34</p>
      </div>
    </div>
  </div>
  )
}

export default DashHome
