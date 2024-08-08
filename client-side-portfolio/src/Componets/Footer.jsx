import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  return (
    <div>
   <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="container mx-auto px-4">

        {/* RIHANDEV Logo and Motto */}
        <div className="flex flex-col items-center mb-6 animate__animated animate__fadeInUp">
          <h1 className="text-2xl font-bold mb-1">RIHAN<span className='text-sky-400'>DEV</span></h1>
          <p className="text-center text-base italic">"Building the web, one line of code at a time."</p>
        </div>

   

        {/* Contact Icons */}
        <div className="flex justify-center space-x-4 mb-6 animate__animated animate__fadeInUp animate__delay-2s">
          <a href="https://linkedin.com/in/md-rihan-b768a92a3" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-500 transition duration-300 transform hover:scale-110" />
          </a>
          <a href="https://github.com/mdrihan34" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400 transition duration-300 transform hover:scale-110" />
          </a>
          <a href="mailto:mdrihan2987@gmail.com">
            <FaEnvelope className="text-2xl hover:text-red-500 transition duration-300 transform hover:scale-110" />
          </a>
        </div>

        {/* Tech Stack Section */}
        <div className="flex justify-center space-x-6 mb-6 animate__animated animate__fadeInUp animate__delay-3s">
          <FaReact className="text-3xl text-blue-400 animate-spin-slow" />
          <FaNodeJs className="text-3xl text-green-500" />
          <SiMongodb className="text-3xl text-green-400" />
          <SiTailwindcss className="text-3xl text-teal-400" />
        </div>

        {/* Back to Top and Copyright */}
        <div className="text-center">
          <button 
            className="bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600 transition duration-300"
            onClick={() => window.scrollTo(0, 0)}
          >
            ↑ Back to Top
          </button>
          <p className="mt-3">Crafted with 💻 and ☕ by RIHANDEV</p>
          <p className="text-gray-500 mt-1">© 2024 RIHANDEV. All rights reserved.</p>
        </div>

      </div>
    </footer>
    </div>
  )
}

export default Footer
