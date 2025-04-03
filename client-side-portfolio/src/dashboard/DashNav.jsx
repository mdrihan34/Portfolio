import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";
import { FiMenu, FiX, FiPlusCircle, FiFolder, FiMessageSquare } from "react-icons/fi";
import { NavLink } from "react-router-dom";


const DashNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="flex">
    {/* Mobile Menu Button */}
    <button className="text-white p-3 fixed top-4 left-4 md:hidden bg-gray-800 rounded-full" onClick={toggleSidebar}>
      <FiMenu size={24} />
    </button>

    {/* Sidebar */}
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:relative md:translate-x-0`}>
      {/* Close Button for Mobile */}
      <button className="text-white absolute top-4 right-4 md:hidden" onClick={toggleSidebar}>
        <FiX size={24} />
      </button>

      <div className="mt-10  space-y-4">
        <NavLink to='/dashboard/viweProject' className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-700 rounded-md">
          <FiFolder size={20} />
          <span>View Project</span>
        </NavLink>
           
        <NavLink to='/dashboard/add-project' className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-700 rounded-md">
          <FiPlusCircle size={20} />
          <span>Add Project</span>
        </NavLink>
        <NavLink to='/dashboard/inbox' className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-700 rounded-md">
          <FiMessageSquare size={20} />
          <span>Inbox</span>
        </NavLink>
        <NavLink to= '/dashboard/resume' className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-700 rounded-md">
          <FcDocument size={20} />
          <span>Resume</span>
        </NavLink>
        <NavLink to='/' className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-700 rounded-md">
          <FaHome size={20} />
          <span>Home</span>
        </NavLink>
      </div>
    </div>
  </div>
  )
}

export default DashNav
