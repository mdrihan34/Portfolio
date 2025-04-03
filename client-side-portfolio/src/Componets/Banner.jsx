// Banner.js
import './Banner.css';
import profile from '../assets/Image/profile.jpeg'
import {  useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';




const Banner = () => {
  useGSAP(() => {
    // gsap code here...
    gsap.from('.anime', { x: 700, 
    
      delay: 0.5
    }); 
    gsap.from('.anime1', { y: 700, 
      borderRadius: 0,
      rotate: 50,
      delay: 0.5
    }); 
    gsap.from('.anime3', {  
    
      y: -50,
      repeat: -1,
      yoyo: true,
      delay: 0.5
   
    }); 
},);
  const [resume, setResume] = useState([]);
  fetch('https://server-site-portfolio-7mtdx1ohr-rihan2045s-projects-8a229069.vercel.app/resume')
  .then((res) => res.json())
  .then((data) => {
  
    setResume(data); 
  })
  .catch((error) => console.error('Error fetching resume:', error));
 console.log(resume)
  return (
    <div className="banner-container  ">
      {/* <video className="video-background" autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="video-overlay"></div>
      <div className="banner-content ">
      <div className="hero ">
  <div className="hero-content lg:gap-44 flex-col lg:flex-row-reverse">
  <div>
    <div className='box anime '>
      <div className='content'>
    <img src={profile}
  alt="Profile"
      className='absolute top-0 left-0 w-full h-full object-cover' />
      </div>

    </div>

  </div>
    <div>
    <div className="w-full h-full flex justify-center items-center">
    <div className="w-full h-full flex justify-center items-center">
 
    </div>
</div>

      <h1
    className="text-2xl anime3 lg:text-5xl font-extrabold text-[#00aaff]  relative w-[max-content] font-mono  before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em]  ">
   MD Ismail Ahmed Rihan
</h1>
      <h2 className='mt-2 text-[#ff69b4] font-thin lg:text-xl'>Full Stack MERN Developer</h2>
      <p className="py-6 text-[#00ced1] text-lg font-mono">
      Passionate about building dynamic and responsive web applications using the  MERN stack.

      </p>
      
      <button className='mt-2'>

<a      target="_blank"
            rel="noopener noreferrer" href={resume.link}  className="relative anime1 inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-orange-50 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative">View Resume</span>
</a>

      </button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Banner;
