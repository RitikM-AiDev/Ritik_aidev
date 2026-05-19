import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Popup = ({ isOpen, onClose, project, darkMode }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">

      {/* overlay click close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* MODAL CARD */}
      <div
        className={`relative w-[95vw] max-w-6xl max-h-[90vh] 
        rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col
        ${darkMode ? "bg-[#081221] text-white" : "bg-white text-black"}`}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 z-20"
        >
          <X size={24} />
        </button>

        {/* IMAGE (AUTO HEIGHT, CLEAN CONTAIN) */}
        <div className="w-full flex items-center justify-center bg-black/10 p-4">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[45vh] w-auto object-contain rounded-xl"
          />
        </div>

        {/* CONTENT (SCROLLABLE IF NEEDED) */}
        <div className="p-8 overflow-y-auto flex-1 space-y-5">

          <h2 className="text-3xl md:text-4xl font-bold">
            {project.title}
          </h2>

          <p className={`text-base md:text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            {project.description}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">

            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-black font-medium"
            >
              <FaGithub size={18} />
              Github
            </a>

            <a
              href={project.live}
              target="_blank"
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border
              ${darkMode ? "border-cyan-400" : "border-black"}`}
            >
              <ExternalLink size={18} />
              Live Demo
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;