const sql = require("mssql");

// ฟังก์ชันสำหรับค้นหาผู้ใช้จากอีเมล
async function findUserByEmail(email) {
  const result = await sql.query`SELECT * FROM UserApp WHERE user_email = ${email}`;
  return result.recordset[0]; // คืนค่าผู้ใช้ตัวแรกที่พบ
}

// ฟังก์ชันสำหรับสร้างผู้ใช้ใหม่
async function createUser(name, email, phone, passwordHash) {
  try {
    await sql.query`
      INSERT INTO UserApp (user_name, user_email, user_phone, user_password)
      VALUES (${name}, ${email}, ${phone}, ${passwordHash})
    `;
  } catch (error) {
    console.error("Database Error:", error.message);
    throw new Error("Failed to create user in the database");
  }
}

module.exports = { findUserByEmail, createUser };
