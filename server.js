const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");

const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());  // ใช้สำหรับรับข้อมูลแบบ JSON

// ตั้งค่าเส้นทางสำหรับ API Authentication
app.use("/api/auth", authRoutes);

// เริ่มต้นเซิร์ฟเวอร์
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
