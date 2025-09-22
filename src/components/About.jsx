import React from "react";
import { FaTools, FaLanguage } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
            About Dr. Hamza Khan
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Applied Mathematician | Educator | Research Collaborator
          </p>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
        </div>

        {/* Professional Overview */}
        <div className="space-y-8 text-gray-700 text-[1.1rem] leading-8">
          <p>
            <span className="font-semibold text-gray-900">Applied Mathematical Researcher</span> with expertise in
            mathematical sciences, Adaptive Control Theory, Computational Fluid Dynamics, Fractional Modeling and  Data Analysis, with several years of experience
            teaching graduate and postgraduate students. Dr. Hamza Khan has contributed actively to global research
            communities in <span className="text-blue-600">Pakistan</span>, <span className="text-blue-600">Hungary</span>, and other regions.
          </p>
          <p> His academic journey began in the <span className="text-blue-600">Phander valley of Ghizer, Gilgit,</span> where his passion for learning first took root. Through dedication and 
            excellence, he earned an international PhD scholarship from the Higher Education Commission of Pakistan,
             paving the way for his doctoral studies at the Doctoral School of Applied Informatics and Applied Mathematics, 
             <span className="text-blue-600"> Óbuda University, Budapest, Hungary.</span>
          </p>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-300" />

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-[1.65rem] font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <FaTools className="text-blue-500" />
            Key Skills & Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "MATLAB",
              "JULIA",
              "LaTeX",
              "MS Office",
              "Visual Basic (Excel)",
              "MINITAB",
              "E.VIEW",
            ].map((tool) => (
              <div
                key={tool}
                className="bg-white border border-blue-100 hover:border-blue-300 text-blue-800 px-4 py-2 rounded-lg text-center font-medium shadow-sm transition duration-300"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div>
          <h3 className="text-[1.65rem] font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <FaLanguage className="text-blue-500" />
            Languages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              "English",
              "Urdu",
              "Arabic (Basic)",
              "Shina",
              "Khowar",
            ].map((lang) => (
              <div
                key={lang}
                className="bg-white border mb-16 border-blue-100 hover:border-blue-300 text-blue-800 px-4 py-2 rounded-lg text-center font-medium shadow-sm transition duration-300"
              >
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
