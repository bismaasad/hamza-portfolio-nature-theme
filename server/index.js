const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Health check route
app.get("/api/hello", (req, res) => {
  console.log("✅ GET /api/hello called");
  res.json({ message: "Hello from backend!" });
});

// ✅ Contact form submission route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,      // from .env
        pass: process.env.PASSWORD,   // from .env
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, // You can replace this with any receiving email
      replyTo: email,
      subject: `📨 New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    res.status(200).json({ message: "Email sent successfully!" });

    } catch (error) {
    console.error("❌ Failed to send email:", error);  // ✅ Make sure this line exists
    res.status(500).json({ error: "Failed to send email." });
  }

});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
