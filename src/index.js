// server/index.js
const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const OUT_DIR = path.join(__dirname, "public");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const upload = multer({ storage: multer.memoryStorage() });

// simple health
app.get("/api/health", (req, res) => res.json({ ok: true }));

app.post("/api/upload", upload.single("image"), async (req, res) => {
  try {
    const buf = req.file.buffer;
    const id = Date.now();
    const thumbName = `${id}-thumb.jpg`;
    const largeName = `${id}-large.jpg`;

    await sharp(buf).resize({ width: 800 }).jpeg({ quality: 85 }).toFile(path.join(OUT_DIR, largeName));
    await sharp(buf).resize({ width: 400 }).jpeg({ quality: 80 }).toFile(path.join(OUT_DIR, thumbName));

    res.json({ thumb: `/public/${thumbName}`, large: `/public/${largeName}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "upload failed" });
  }
});

// serve static uploaded images (if you host on a server)
app.use("/public", express.static(OUT_DIR));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on", port));
