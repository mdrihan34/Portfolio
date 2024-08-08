import AboutPhoto from '../assets/Image/about.jpeg'
import './about.css'
const About = () => {
  return (
    <div className='mt-10 lg:mt-36'>
      <h1 className="text-center my-10 mb-12 px-6 text-4xl font-extrabold">About ME</h1>
    <div className='lg:flex container mx-auto gap-10 boxs shadow-xl  lg:ml-52'>
    <div>
   <img className='w-72 lg:w-[24rem] mx-auto lg:max-w-sm  rounded-xl' src={AboutPhoto} alt="about photo" />
</div>
<div className='p-4'>
  <h1 className='font-bold text-white text-2xl'>Get to Know Me</h1>
  <div className='divider divider-info'></div>
  <h2 className='text-xl font-semibold text-red-200'>Transforming Ideas into Code</h2>
  <p className='mt-5'>
    I’m a passionate Full Stack MERN Developer with a deep understanding of modern web technologies. 
    My expertise lies in creating dynamic, responsive, and user-friendly web applications using the MERN stack—MongoDB, Express.js, React.js, and Node.js. 
    With a keen eye for detail and a commitment to excellence, I transform complex problems into elegant solutions.

 
    With a background in both front-end and back-end development, I’m adept at designing intuitive user interfaces and developing robust server-side logic. 
    I enjoy exploring new technologies and continually improving my skills. When I’m not coding, you might find me reading about the latest trends in technology or experimenting with new programming languages.
  
    Let’s connect and build something amazing together!
  </p>
</div>
    </div>
    </div>
  )
}

export default About
