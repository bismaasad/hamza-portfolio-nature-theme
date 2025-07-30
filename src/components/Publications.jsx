import React from "react";
import { FaBookOpen } from "react-icons/fa";

const publications = [
  {
    title: "Numerical Insights of Mixed Convection in a Square Cavity with an Insulated Vertical Strip",
    journal: "Fluid Dynamics",
    year: "2025",
    doi: "",
  },
  {
    title: "Nonlinear Dynamics of Violence Diffusion: The Fractional Derivative-Based Numerical",
    journal: "Chiang Mai Journal of Sciences",
    year: "2025",
    doi: "",
  },
  {
    title: "Towards Efficient Solutions: A Novel Approach to Quadratic Nonlinearity in Boundary Value Problems",
    journal: "Plos One",
    year: "2024",
    doi: "",
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
    doi: "10.3390/computation8040096",
  },
  {
    title: "Fine Tuning of the Fixed Point Iteration-Based Matrix Inversion-Free Adaptive Inverse Kinematics Using Abstract Rotations",
    journal: "Punjab University Journal of Mathematics",
    year: "2020",
    doi: "https://www.researchgate.net/publication/339901018_Fine_Tuning_of_the_Fixed_Point_Iteration-Based_Matrix_Inversion-Free_Adaptive_Inverse_Kinematics_Using_Abstract_Rotations",
  },
  {
    title: "On the Implementation of Fixed Point Iteration based adaptive Receding Horizon Control for Multiple Degree of Freedom, Higher Order Dynamical System",
    journal: "Acta Polytechnica Hungarica",
    year: "2019",
    doi: "10.12700/APH.16.9.2019.9.8",
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
    doi: "10.19080/RAEJ.2018.03.555623",
  },
  {
    title: "Stochastic River Flow Modelling and Forecasting of Upper Indus Basin",
    journal: "Journal of Basic and Applied Sciences (JBAS)",
    year: "2015",
    doi: "http://www.lifescienceglobal.com/pms/index.php/jbas/article/view/3501",
  },
  {
    title: "Comparison of the Operation of Fixed Point Iteration-based Adaptive and Robust VS/SM-type Solutions for Controlling Two Coupled Fluid Tanks",
    journal: "20th IEEE International Symposium on Computational Intelligence and Informatics (CINTI)",
    year: "2020",
    doi: "https://www.researchgate.net/publication/348367788_Comparison_of_the_Operation_of_Fixed_Point_Iteration-based_Adaptive_and_Robust_VSSM-type_Solutions_for_Controlling_Two_Coupled_Fluid_Tanks",
  },
  {
    title: "Improved Simple Noise Filtering for Fixed Point Iteration-based Adaptive Controllers",
    journal: "20th IEEE International Symposium on Computational Intelligence and Informatics (CINTI)",
    year: "2020",
    doi: "https://www.researchgate.net/publication/348366609_Improved_Simple_Noise_Filtering_for_Fixed_Point_Iteration-based_Adaptive_Controllers",
  },
  {
    title: "Fixed Point Transformation-based Adaptive Optimal Control Using Non-Linear Programming (NP)",
    journal: "IEEE SISY",
    year: "2017",
    doi: "10.1109/NC.2017.8263279",
  },
  {
    title: "Fixed Point Iteration-based Problem Solution without the Calculation of the Jacobian",
    journal: "IEEE SAMI",
    year: "2019",
    doi: "https://www.researchgate.net/publication/320750483_Fixed_point_transformation-based_adaptive_optimal_control_using_NLP",
  },
  {
    title: "Novel Contradiction Resolution in Fixed Point Transformation-based Adaptive Control",
    journal: "18th IEEE International Symposium on Computational Intelligence and Informatics (CINTI)",
    year: "2018",
    doi: "10.1109/CINTI.2018.8928235",
  },
  {
    title: "Preliminary Investigation on the Possible Adaptive Control of an Inverted Pendulum-type Electric Cart",
    journal: "18th IEEE International Symposium on Computational Intelligence and Informatics (CINTI)",
    year: "2018",
    doi: "10.1109/CINTI.2018.8928229",
  },
  {
    title: "Adaptive solution of the inverse kinematic task by fixed point transformation",
    journal: "IEEE SAMI",
    year: "2017",
    doi: "10.1109/SAMI.2017.7880312",
  },
  {
    title: "On Replacing Lagrange’s Reduced Gradient Algorithm by Simplified Fixed Point Iteration in Adaptive Model Predictive Control",
    journal: "IEEE INES",
    year: "2019",
    doi: "https://www.researchgate.net/publication/332726675_On_Replacing_Lagrange's_Reduced_Gradient_Algorithm_by_Simplified_Fixed_Point_Iteration_in_Adaptive_Model_Predictive_Control",
  },
  {
    title: "Suboptimal Adaptive Receding Horizon Control Using Simplified Nonlinear Programming",
    journal: "IEEE Xplore",
    year: "2021",
    doi: "",
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

        <div className="space-y-8">
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