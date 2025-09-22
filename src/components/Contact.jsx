import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-100 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-lg text-gray-500 italic font-medium">
            Reach out to Dr. Hamza Khan
          </p>
          <div className="mt-4 mx-auto w-32 h-1 rounded bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400 shadow-md" />
        </div>

        {/* Scholar Profiles */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6 md:p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-700 flex items-center gap-2">
            <SiGooglescholar className="text-2xl" />
            Academic Profiles
          </h3>
          <ul className="space-y-2 text-blue-700 text-lg font-semibold">
            <li>
              <a
                href="https://scholar.google.com/citations?user=EpFSiBkAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Google Scholar
              </a>
            </li>
            <li>
              <a
                href="https://www.researchgate.net/profile/Hamza-Khan-7?ev=hdr_xprf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Research Gate
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid gap-6 mb-16 md:grid-cols-2 text-gray-700">
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <h3 className="text-xl font-semibold text-emerald-700">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-emerald-600 text-xl mt-1" />
                <div>
                  <p className="font-medium text-base">Email:</p>
                  <ul className="text-blue-700 space-y-1 text-base font-medium">
                    <li>
                      <a
                        href="mailto:hamzakhan@ntu.edu.pk"
                        className="hover:underline"
                      >
                        hamzakhan@ntu.edu.pk
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:hamza.khan@uni-obuda.hu"
                        className="hover:underline"
                      >
                        hamza.khan@uni-obuda.hu
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:ameer.hamza22@gmail.com"
                        className="hover:underline"
                      >
                        ameer.hamza22@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-emerald-600 text-xl" />
                <span className="text-base font-medium">
                  Phone:{" "}
                  <a
                    href="tel:+923333032982"
                    className="text-blue-700 hover:underline"
                  >
                    +92 333 3032982
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <h3 className="text-xl font-semibold text-emerald-700">
              Send a Message
            </h3>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
