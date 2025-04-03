
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-2xl overflow-hidden shadow-lg bg-gray-900 p-6 text-white border border-gray-700"
    >
      <div className="p-6 rounded-lg overflow-hidden  border-gray-600">
        <img 
          src={project.landingPhoto} 
          alt={project.title} 
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="flex justify-between mt-6">
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 border border-gray-500 text-gray-300 px-5 py-2 rounded-lg hover:bg-gray-700">
              <Code size={18} /> View Code
            </button>
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500">
              <ExternalLink size={18} /> Live Demo
            </button>
          </a>
        </div>
        <div className="p-4 text-start">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.description}</p>
        </div>
        <div className="mt-4 text-start">
          <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Features</h3>
          <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-2">
            <li>{project.feature1}</li>
            <li>{project.feature2}</li>
            <li>{project.feature3}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;