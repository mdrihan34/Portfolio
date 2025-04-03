import { useState, useEffect } from "react";
import axios from "axios";

const Resume = () => {
  const [resume, setResume] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newLink, setNewLink] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://portfolio-w7p2.vercel.app/resume")
      .then((response) => {
        setResume(response.data[0]);
      })
      .catch((error) => console.error("Error fetching resume link:", error))
      .finally(() => setLoading(false));
  }, []);

  const addOrUpdateResume = async () => {
    if (newLink.trim() !== "") {
      try {
        if (resume) {
          await axios.put(`https://portfolio-w7p2.vercel.app/resume/${resume._id}`, { link: newLink });
        } else {
          await axios.post("https://portfolio-w7p2.vercel.app/resume", { link: newLink });
        }
        setResume({ link: newLink });
        setShowModal(false);
      } catch (error) {
        console.error("Error updating resume link:", error);
      }
    }
  };

  const deleteResume = async () => {
    if (resume) {
      try {
        await axios.delete(`https://portfolio-w7p2.vercel.app/resume/${resume._id}`);
        setResume(null);
      } catch (error) {
        console.error("Error deleting resume:", error);
      }
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-4">My Resume</h2>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : resume ? (
        <div className="flex flex-col items-center">
          <a
            href={resume.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              window.open(resume.link, "_blank", "noopener,noreferrer");
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
          >
            View Resume
          </a>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition"
            >
              Update Resume
            </button>
            <button
              onClick={deleteResume}
              className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition"
            >
              Delete Resume
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-gray-500 mb-4">No resume uploaded yet.</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition"
          >
            Add Resume
          </button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h3 className="text-lg font-bold mb-2">{resume ? "Update Resume Link" : "Add Resume Link"}</h3>
            <input
              type="text"
              placeholder="Enter Google Drive Link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={addOrUpdateResume}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
