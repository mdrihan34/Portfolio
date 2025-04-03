import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const AddProject = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        fetch('https://server-site-portfolio-7mtdx1ohr-rihan2045s-projects-8a229069.vercel.app/project', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                liveLink: data.liveLink,
                codeLink: data.codeLink,
                landingPhoto: data.landingPhoto,
                title: data.title,
                description: data.description,
                feature1: data.feature1,
                feature2: data.feature2,
                feature3: data.feature3,
            }),
        })
        .then((response) => response.json())
        .then((json) => {
            console.log('Server Response:', json);
      
            if (json.insertedId) {
             
                document.getElementById('projectForm').reset(); 
    
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your project has been successfully added!',
                    confirmButtonText: 'OK',
                });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again later.',
            });
        });
    };
    
    return (
      <div className='bg-gray-900 w-full'>
         <div className=" mx-auto p-6  text-white shadow-lg rounded-xl w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 ">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-blue-400">Add New Project</h2>
            <p className="text-gray-300 text-center mb-6 text-sm sm:text-base">Fill in the details below to add your new project.</p>
            <form id="projectForm" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input 
                    type="text" 
                    placeholder="Live Link" 
                    {...register("liveLink")} 
                    className="w-full p-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                    type="text" 
                    placeholder="Code Link" 
                    {...register("codeLink")} 
                    className="w-full p-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                    type="text" 
                    placeholder="Website Landing Photo URL" 
                    {...register("landingPhoto")} 
                    className="w-full p-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                    type="text" 
                    placeholder="Title" 
                    {...register("title")} 
                    className="w-full p-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea 
                    placeholder="Description" 
                    {...register("description")} 
                    className="w-full p-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li><input type="text" placeholder="Feature 1" {...register("feature1")} className="w-full p-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /></li>
                    <li><input type="text" placeholder="Feature 2" {...register("feature2")} className="w-full p-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /></li>
                    <li><input type="text" placeholder="Feature 3" {...register("feature3")} className="w-full p-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /></li>
                </ul>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all duration-200">Submit</button>
            </form>
        </div>
      </div>
    );
};

export default AddProject;