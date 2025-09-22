import React, { useEffect, useState } from "react";
import axios from "axios";

const TestBackend = () => {
  const [message, setMessage] = useState("");
  const API_URL = process.env.REACT_APP_API_URL; // 👈 env se url lo

  useEffect(() => {
    axios.get(`${API_URL}/api/hello`)
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error("❌ Backend connection error:", err.message);
      });
  }, [API_URL]);

  return (
    <div className="p-4 text-center">
      {message && (
        <>
          <h2 className="text-xl font-semibold text-green-700">Backend Says:</h2>
          <p className="text-lg">{message}</p>
        </>
      )}
    </div>
  );
};

export default TestBackend;
