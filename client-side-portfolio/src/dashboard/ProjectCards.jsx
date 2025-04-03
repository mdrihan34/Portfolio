import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';

const ProjectCards = ({ project  }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProject, setEditedProject] = useState({
    title: project.title,
    description: project.description,
    landingPhoto: project.landingPhoto,
    liveLink: project.liveLink,
    codeLink: project.codeLink,
    feature1: project.feature1,
    feature2: project.feature2,
    feature3: project.feature3,
  });

  // Handle delete with SweetAlert
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Delete project after confirmation
          await axios.delete(`https://server-site-portfolio-7mtdx1ohr-rihan2045s-projects-8a229069.vercel.app/project/${project._id}`);
          Swal.fire('Deleted!', 'Your project has been deleted.', 'success');
        } catch (error) {
          console.error("Error deleting project:", error);
          Swal.fire('Error!', 'There was an issue deleting your project.', 'error');
        }
      }
    });
  };

  // Handle editing input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProject({
      ...editedProject,
      [name]: value,
    });
  };

  // Handle form submission for updating project
  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure you want to update the project?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.put(`https://server-site-portfolio-7mtdx1ohr-rihan2045s-projects-8a229069.vercel.app/project/${project._id}`, editedProject);
          Swal.fire('Updated!', 'Your project has been updated.', 'success');
          setIsEditing(false); // Close the form after successful update
        } catch (error) {
          console.error("Error updating project:", error);
          Swal.fire('Error!', 'There was an issue updating your project.', 'error');
        }
      }
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full sm:w-80 mx-auto">
      <img src={project.landingPhoto} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <div className="space-x-4">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Live Demo
        </a>
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Code
        </a>
      </div>
      <h3 className="font-semibold text-xl text-black mb-2">{project.titlen}</h3>
      <p className="text-gray-600 mb-2">{project.description}</p>
     

      {/* Features */}
      <div className="mt-4 text-black">
        <ul>
          <li><strong>Feature 1:</strong> {project.feature1}</li>
          <li><strong>Feature 2:</strong> {project.feature2}</li>
          <li><strong>Feature 3:</strong> {project.feature3}</li>
        </ul>
      </div>

      {/* Edit and Delete Buttons */}
      <div className="flex justify-between mt-4">
        <button onClick={() => setIsEditing(true)} className="text-blue-500 hover:text-blue-700">
          <FaEdit size={20} /> {/* Edit Icon */}
        </button>

        <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
          <FaTrashAlt size={20} /> {/* Delete Icon */}
        </button>
      </div>

      {/* Edit Form */}
      {isEditing && (
        <div className="mt-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Project Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={editedProject.title}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                value={editedProject.description}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="landingPhoto" className="block text-sm font-medium text-gray-700">Landing Photo URL</label>
              <input
                type="text"
                id="landingPhoto"
                name="landingPhoto"
                value={editedProject.landingPhoto}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="liveLink" className="block text-sm font-medium text-gray-700">Live Demo Link</label>
              <input
                type="text"
                id="liveLink"
                name="liveLink"
                value={editedProject.liveLink}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="codeLink" className="block text-sm font-medium text-gray-700">Code Link</label>
              <input
                type="text"
                id="codeLink"
                name="codeLink"
                value={editedProject.codeLink}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="feature1" className="block text-sm font-medium text-gray-700">Feature 1</label>
              <input
                type="text"
                id="feature1"
                name="feature1"
                value={editedProject.feature1}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="feature2" className="block text-sm font-medium text-gray-700">Feature 2</label>
              <input
                type="text"
                id="feature2"
                name="feature2"
                value={editedProject.feature2}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="feature3" className="block text-sm font-medium text-gray-700">Feature 3</label>
              <input
                type="text"
                id="feature3"
                name="feature3"
                value={editedProject.feature3}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Update Project
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProjectCards;
