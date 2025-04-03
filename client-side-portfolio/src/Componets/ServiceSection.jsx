import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, BarChart3 } from "lucide-react";
import ServicsBg from '../../public/image/project.png'
const services = [
  {
    title: "Web Development",
    description: "I build responsive and high-performing websites using the latest technologies.",
    icon: <Code size={40} className="text-blue-500" />,
  },
  {
    title: "SEO Optimization",
    description: "Boost your website’s ranking with modern SEO strategies for better visibility.",
    icon: <BarChart3 size={40} className="text-green-500" />,
  },
  {
    title: "E-commerce Solutions",
    description: "Create a scalable and secure online store with custom features.",
    icon: <Globe size={40} className="text-yellow-500" />,
  },
];

const ServiceSection = () => {
  return (
    <section className="py-16  text-white "  style={{ backgroundImage: `url(${ServicsBg})` , backgroundRepeat : 'no-repeat', backgroundSize : 'cover'}}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold uppercase relative inline-block">
          Services
          <span className="block h-1 w-16 bg-blue-500 mx-auto mt-2"></span>
        </h2>
      </div>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center border border-gray-700"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
