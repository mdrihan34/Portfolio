
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
const Contact = () => {
  return (
    <div>
      <div className="container my-12 mx-auto px-2 md:px-4 mt-10 lg:mt-36">

    <section className="mb-32">

        <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
                <h2 className="mb-12 px-6 text-4xl font-extrabold">
                    Contact us
                </h2>
            </div>
        </div>

        <div className="flex flex-wrap bg-black px-[59px] py-60 rounded-xl boxss">

            <form className="mb-12 w-full  shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">

                <div className="mb-3 w-full">
                    <label className="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                            Name
                    </label>
                    <input type="text" className="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90" placeholder="Name" />
                </div>

                <div className="mb-3 w-full">
                    <label className="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                            Email
                    </label>
                    <input type="email" className="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90"
                            placeholder="Enter your email address" />
                </div>

                <div className="mb-3 w-full">
                    <label className="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                            Message
                    </label>
                    <textarea className="px-2 py-2 border rounded-[5px] w-full outline-none" name="" id=""></textarea>
                </div>

                <button type="button"
                        className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500">
                        Send
                </button>

            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-black text-white">
      {/* WhatsApp */}
      <div className="flex items-start">
        <FaWhatsapp className="text-2xl text-sky-400 mr-4 mt-1" />
        <div>
          <h4 className="font-bold text-lg text-sky-400">WhatsApp</h4>
          <p>+880 1327-946185</p>
        </div>
      </div>

      {/* GitHub */}
      <div className="flex items-start">
        <FaGithub className="text-2xl text-sky-400 mr-4 mt-1" />
        <div>
          <h4 className="font-bold text-lg text-sky-400">GitHub</h4>
          <p><a href="https://github.com/mdrihan34" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">Check out my GitHub</a></p>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="flex items-start">
        <FaLinkedin className="text-2xl text-sky-400 mr-4 mt-1" />
        <div>
          <h4 className="font-bold text-lg text-sky-400">LinkedIn</h4>
          <p><a href="https://www.linkedin.com/in/md-rihan-b768a92a3/" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">View my LinkedIn</a></p>
        </div>
      </div>

      {/* Gmail */}
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
    </div>
  )
}

export default Contact
