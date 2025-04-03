import { useState, useEffect } from 'react';
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import ContactBg from '../../public/image/about.png'
const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [submittedMessage, setSubmittedMessage] = useState(localStorage.getItem('contactMessage'));
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    fetch('https://server-site-portfolio-7mtdx1ohr-rihan2045s-projects-8a229069.vercel.app/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        setSubmittedMessage(`Thank you, ${data.name}! Your message has been received. We'll get back to you soon.`);
        localStorage.setItem('contactMessage', `Thank you, ${data.name}! Your message has been received.`);
        alert('Your message has been submitted successfully!');
        reset();
      })
      .catch((error) => console.error('Error:', error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="  mx-auto  py-10 "  style={{ backgroundImage: `url(${ContactBg})` , backgroundRepeat : 'no-repeat', backgroundSize : 'cover'}}>
     
      <section className="mb-32">
      <div className="text-center py-8">
      <h2 className="text-4xl font-bold text-white uppercase relative inline-block">
      Contact us
        <span className="block h-1 w-16 bg-blue-500 mx-auto mt-2"></span>
      </h2>
    </div>
        <div className="flex justify-center text-center md:max-w-xl lg:max-w-3xl">
          
          
        </div>
        <div className="flex flex-wrap  px-12 py-10 rounded-xl text-white">
          {submittedMessage ? (
            <div className="w-full text-center text-lg font-semibold text-teal-400">{submittedMessage}</div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-6/12 px-3">
              <div className="mb-3">
                <label className="block font-medium mb-1 text-teal-400">Name</label>
                <input {...register('name')} type="text" className="px-2 py-2 border w-full rounded-md outline-none" placeholder="Name" required />
              </div>
              <div className="mb-3">
                <label className="block font-medium mb-1 text-teal-400">Email</label>
                <input {...register('email')} type="email" className="px-2 py-2 border w-full rounded-md outline-none" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="block font-medium mb-1 text-teal-400">Message</label>
                <textarea {...register('message')} className="px-2 py-2 border w-full rounded-md outline-none" placeholder="Write your message" required></textarea>
              </div>
              <button type="submit" className="w-full bg-teal-400 py-2 rounded-md text-white hover:bg-teal-500">
                {loading ? 'Submitting...' : 'Send'}
              </button>
            </form>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <div className="flex items-start">
              <FaWhatsapp className="text-2xl text-sky-400 mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-sky-400">WhatsApp</h4>
                <p>+880 1327-946185</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaGithub className="text-2xl text-sky-400 mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-sky-400">GitHub</h4>
                <p><a href="https://github.com/mdrihan34" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">Check out my GitHub</a></p>
              </div>
            </div>
            <div className="flex items-start">
              <FaLinkedin className="text-2xl text-sky-400 mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-sky-400">LinkedIn</h4>
                <p><a href="https://www.linkedin.com/in/md-rihan-b768a92a3/" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">View my LinkedIn</a></p>
              </div>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-2xl text-sky-400 mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-sky-400">Gmail</h4>
                <p>mdrihan2987@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
