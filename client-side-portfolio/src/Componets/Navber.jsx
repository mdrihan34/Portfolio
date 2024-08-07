import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";

import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  const links = (
    <>
      <li>
        <NavLink className="text-lg font-bold hover:text-blue-400 text-white" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-bold hover:text-blue-400 text-white" to="/about">About Me</NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-bold hover:text-blue-400 text-white" to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-bold hover:text-blue-400 text-white" to="/skills">Skills</NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-bold hover:text-blue-400 text-white" to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className={`navbar ${isHome ? 'absolute' : 'fixed'} top-0 left-0 w-full bg-black ${isHome ? 'bg-opacity-50' : 'bg-opacity-90'} py-2 px-6 z-20`}>
      <div className="navbar-start">
        <div className="dropdown">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost lg:hidden"
          >
            {isOpen ? (
               <IoMdCloseCircle className="text-white text-xl"></IoMdCloseCircle>
            ) : (
            
             <TiThMenu className="text-white text-xl"></TiThMenu>
            )}
          </button>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black opacity-40 marker: rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          )}
        </div>
        <h1 className="font-extrabold text-2xl bro text-white">
          RIHAN<span className="text-blue-400">DEV</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
