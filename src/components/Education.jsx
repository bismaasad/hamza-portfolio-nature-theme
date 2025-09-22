import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "PhD in Mathematical Sciences (Information Science and Technology)",
      institute: "Óbuda University, Budapest, Hungary",
      website: "https://www.uni-obuda.hu",
      grade: "97% (Suma Cum Laude)",
      year: "2016 – 2021",
    },
    {
      degree: "M.Phil. in Mathematical Sciences",
      institute: "Federal Urdu University of Arts, Sciences and Technology (FUUAST)",
      website: "https://www.fuuast.edu.pk",
      grade: "76%, CGPA 3.45",
      year: "2010 – 2012",
    },
    {
      degree: "B.S (Hons) in Mathematical Sciences",
      institute: "Karakoram International University, Gilgit, Pakistan",
      website: "https://www.kiu.edu.pk",
      grade: "76.9%, CGPA 3.42",
      year: "2004 – 2008",
    },
    {
      degree: "B.Ed. (Bachelor's in Education)",
      institute: "Karakoram International University, Gilgit, Pakistan",
      website: "https://www.kiu.edu.pk",
      year: "2013",
    },
  ];

  return (
    <section id="education" className="py-24 mb-16 bg-gray-100 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
            🎓 Education
          </h2>
          <p className="mt-3 text-lg text-gray-500 font-medium italic">
            Academic Background
          </p>

          {/* Stylish Blue Divider */}
          <div className="mt-4 mx-auto w-32 h-1 rounded bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 shadow-md" />
        </div>

        {/* Education Cards */}
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white border-l-4 border-blue-500 pl-10 pr-6 py-6 shadow-md rounded-lg max-w-3xl mx-auto"
            >
              {/* Icon */}
              <div className="absolute -left-5 top-6 bg-blue-500 text-white p-2 rounded-full shadow">
                <FaGraduationCap size={16} />
              </div>

              {/* Degree Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {edu.degree}
              </h3>

              {/* Institute Name */}
              <p className="text-gray-700">
                <a
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {edu.institute}
                </a>
              </p>

              {/* Grade */}
              {edu.grade && (
                <p className="text-sm text-gray-600 mt-1 italic">{edu.grade}</p>
              )}

              {/* Year */}
              <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
