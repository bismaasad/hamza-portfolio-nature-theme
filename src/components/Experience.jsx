import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const Experience = () => {
  const experienceData = [
    {
      title: "Assistant Professor",
      place: "National Textile University, Faisalabad",
      duration: "June 28, 2022 – Present",
    },
    {
      title: "Lecturer",
      place: "National Textile University, Karachi Campus",
      duration: "September 2020 – June 27, 2022",
    },
    {
      title: "Senior Instructor of Mathematics",
      place: "F.G. Public Colleges, Jutial Gilgit, Pakistan",
      duration: "April 2014 – September 2016",
    },
    {
      title: "Lecturer",
      place: "Army Public College, Gilgit, Pakistan",
      duration: "April 2013 – April 2014",
    },
  ];

  return (
    <section id="experience" className="py-24 mb-16 bg-gray-100 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
            🧑‍🏫 Teaching Experience
          </h2>
          <p className="mt-3 text-lg text-gray-500 font-medium italic">
            Academic Teaching Timeline
          </p>
          {/* Stylish Blue Divider */}
          <div className="mt-4 mx-auto w-32 h-1 rounded bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 shadow-md" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white pl-10 pr-6 py-6 border-l-4 border-blue-500 rounded-lg shadow-md max-w-3xl mx-auto"
            >
              {/* Icon */}
              <div className="absolute -left-5 top-6 bg-blue-500 text-white p-2 rounded-full shadow">
                <FaChalkboardTeacher size={16} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {exp.title}
              </h3>

              {/* Place */}
              <p className="text-gray-700">{exp.place}</p>

              {/* Duration */}
              <p className="text-sm text-gray-500 mt-1">{exp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
