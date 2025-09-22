import React from "react";
import { FaBookOpen } from "react-icons/fa";

const publications = [
  {
    title: "Numerical Insights of Mixed Convection in a Square Cavity with an Insulated Vertical Strip",
    journal: "Fluid Dynamics",
    year: "2025",
    doi: "https://link.springer.com/article/10.1134/S0015462825600853",
  },
  {
    title: "Nonlinear Dynamics of Violence Diffusion: The Fractional Derivative-Based Numerical",
    journal: "Chiang Mai Journal of Sciences",
    year: "2025",
    doi: "https://epg.science.cmu.ac.th/ejournal/journal-detail.php?id=11952",
  },
  {
    title: "Towards Efficient Solutions: A Novel Approach to Quadratic Nonlinearity in Boundary Value Problems",
    journal: "Plos One",
    year: "2025",
    doi: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0317752",
  },
  {
    title: "Recycling orange waste for the sustainable dyeing of polyester fabric",
    journal: "Journal of the Indian Chemical Society",
    year: "2024",
    doi: "https://doi.org/10.1016/j.jics.2024.101293",
  },
  {
    title: "Applications of co-axial electrospinning in the biomedical field",
    journal: "Next Materials",
    year: "2024",
    doi: "https://doi.org/10.1016/j.nxmate.2024.100138",
  },
  {
    title: "Study the seasonal trend analysis and probability distribution functions of rainfall for atmospheric region of Pakistan",
    journal: "MethodsX",
    year: "2023",
    doi: "https://doi.org/10.1016/j.mex.2023.102058",
  },
  {
    title: "A Study of Long-Term Sunspots and K-Index Geometric Cycles Using Probabilistic Modeling",
    journal: "Journal of Mountain Area Research",
    year: "2022",
    doi: "https://doi.org/10.53874/jmar.v7i0.141",
  },
  {
    title: "Application of the Robust Fixed Point Iteration Method in Control of the Level of Twin Tanks Liquid",
    journal: "Computation",
    year: "2020",
    doi: "https://www.mdpi.com/2079-3197/8/4/96",
  },
  {
    title: "Fine Tuning of the Fixed Point Iteration-Based Matrix Inversion-Free Adaptive Inverse Kinematics Using Abstract Rotations",
    journal: "Punjab University Journal of Mathematics",
    year: "2020",
    doi: "https://pujm.pu.edu.pk/index.php/pujm/article/view/332",  
  },
  {
    title: "On the Implementation of Fixed Point Iteration based adaptive Receding Horizon Control for Multiple Degree of Freedom, Higher Order Dynamical System",
    journal: "Acta Polytechnica Hungarica",
    year: "2019",
    doi: "https://acta.uni-obuda.hu/Khan_Tar_96.pdf",
  },
  {
    title: "Receding Horizon Control of Type 1 Diabetes Mellitus by Using Nonlinear Programming",
    journal: "Complexity",
    year: "2018",
    doi: "https://doi.org/10.1155/2018/4670159",
  },
  {
    title: "Iterative Solution in Adaptive Model Predictive Control by Using Fixed-Point Transformation Method",
    journal: "International Journal of Mathematical Models and Methods in Applied Sciences",
    year: "2018",
    doi: "http://www.naun.org/main/NAUN/ijmmas/2018/a042001-act.pdf",
  },
  {
    title: "Adaptive model predictive control based on fixed point iteration",
    journal: "WSEAS Transactions on System and Control",
    year: "2017",
    doi: "http://www.wseas.org/multimedia/journals/control/2017/a745903-068.php",
  },
  {
    title: "On The Alternatives of Lyapunov’s Direct Method in Adaptive Control Design",
    journal: "Robotics & Automation Engineering Journal (RAEJ)",
    year: "2018",
    doi: "https://juniperpublishers.com/raej/pdf/RAEJ.MS.ID.555623.pdf",
  },
  {
    title: "Stochastic River Flow Modelling and Forecasting of Upper Indus Basin",
    journal: "Journal of Basic and Applied Sciences (JBAS)",
    year: "2015",
    doi: "https://www.semanticscholar.org/paper/Stochastic-River-Flow-Modelling-and-Forecasting-of-Khan-Hassan/6fd0b1b91798c547b5873b5530a209829ad3154d",
  },
  {
    title: "Comparison of the Operation of Fixed Point Iteration-based Adaptive and Robust VS/SM-type Solutions for Controlling Two Coupled Fluid Tanks",
    journal: "20th IEEE International Symposium on Computational Intelligence and Informatics (CINTI)",
    year: "2020",
    doi: "https://ieeexplore.ieee.org/document/9305827/",
  },
  {
    title: "Improved Simple Noise Filtering for Fixed Point Iteration-based Adaptive Controllers",
    journal: "20th IEEE International Symposium on Computational Intelligence and Informatics (CINTI)",
    year: "2020",
    doi: "https://ieeexplore.ieee.org/document/9305840",
  },
  {
    title: "Fixed Point Transformation-based Adaptive Optimal Control Using Non-Linear Programming (NP)",
    journal: "IEEE SISY",
    year: "2017",
    doi: "https://ieeexplore.ieee.org/document/8263279",
  },
  {
    title: "Fixed Point Iteration-based Problem Solution without the Calculation of the Jacobian",
    journal: "IEEE SAMI",
    year: "2019",
    doi: "https://ieeexplore.ieee.org/document/8782749",
  },
  {
    title: "Novel Contradiction Resolution in Fixed Point Transformation-based Adaptive Control",
    journal: "18th IEEE International Symposium on Computational Intelligence and Informatics (CINTI)",
    year: "2018",
    doi: "https://ieeexplore.ieee.org/document/8928235",
  },
  {
    title: "Preliminary Investigation on the Possible Adaptive Control of an Inverted Pendulum-type Electric Cart",
    journal: "18th IEEE International Symposium on Computational Intelligence and Informatics (CINTI)",
    year: "2018",
    doi: "https://ieeexplore.ieee.org/document/8928229",
  },
  {
    title: "Adaptive solution of the inverse kinematic task by fixed point transformation",
    journal: "IEEE SAMI",
    year: "2017",
    doi: "https://ieeexplore.ieee.org/document/7880312",
  },
  {
    title: "On Replacing Lagrange’s Reduced Gradient Algorithm by Simplified Fixed Point Iteration in Adaptive Model Predictive Control",
    journal: "IEEE INES",
    year: "2019",
    doi: "https://ieeexplore.ieee.org/document/9109504",
  },
  {
    title: "Suboptimal Adaptive Receding Horizon Control Using Simplified Nonlinear Programming",
    journal: "IEEE Xplore",
    year: "2021",
    doi: "https://ieeexplore.ieee.org/document/9512918",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-24 bg-gray-100 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
            📚 Research Publications
          </h2>
          <p className="mt-3 text-lg text-gray-500 font-medium italic">
            Recent Contributions to Scientific Journals
          </p>
          <div className="mt-4 mx-auto w-32 h-1 rounded bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 shadow-md" />
        </div>

        <div className="space-y-8 mb-16">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="relative bg-white pl-10 pr-6 py-6 border-l-4 border-blue-500 rounded-lg shadow-md max-w-3xl mx-auto"
            >
              <div className="absolute -left-5 top-6 bg-blue-500 text-white p-2 rounded-full shadow">
                <FaBookOpen size={16} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{pub.title}</h3>
              <p className="text-gray-700 italic text-sm">
                {pub.journal} — {pub.year}
              </p>
              {pub.doi && (
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm font-medium mt-2 inline-block hover:underline"
                >
                  🔗 View Publication
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;