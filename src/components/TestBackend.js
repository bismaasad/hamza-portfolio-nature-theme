// src/components/TestBackend.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const TestBackend = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/hello")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error("Error connecting to backend:", err);
        setMessage("Backend connection failed");
      });
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold text-green-700">Backend Says:</h2>
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default TestBackend;
