import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

const PrivateDash = ({ children }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [viwePass, setViwePass] = useState("password");

  // Access the environment variable
  const correctPassword = import.meta.env.VITE_DASH_PASS;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("❌ Incorrect Password!");
    }
  };

  const handleChnage = () => {
    setViwePass("text");
  };

  const handleChnage1 = () => {
    setViwePass("password");
  };

  return (
    <div className="bg-gray-900">
      {isAuthenticated ? (
        <div className="w-full bg-gray-800 text-white rounded-lg shadow-lg">
          {children}
        </div>
      ) : (
        <div className="flex min-h-screen justify-center items-center">
          <div className="bg-gray-800 flex mx-auto p-6 rounded-lg shadow-lg w-96">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <h2 className="text-xl font-semibold text-white mb-4 text-center">
                🔒 Enter Password to Access Dashboard
              </h2>

              <input
                type={viwePass}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-all"
              >
                Submit
              </button>
              <Link
                to="/"
                className="mt-4 uppercase text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition-all"
              >
                back to home
              </Link>
            </form>

            <div className="absolute md:right-[34%] right-[10%] lg:right-[42%] top-[46%] sm:top-[47%]">
              {viwePass === "password" ? (
                <button type="button" onClick={handleChnage}>
                  <IoIosEyeOff />
                </button>
              ) : (
                <button type="button" onClick={handleChnage1}>
                  <IoMdEye />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateDash;
