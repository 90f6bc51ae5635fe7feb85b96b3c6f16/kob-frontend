const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

import memberModel from "../models/member.js";


// ตั้ง secret จริง ๆ ควรเก็บใน process.env.JWT_SECRET
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = 604800; // หรือ '7d' ตามต้องการ


const router = express.Router();

app.use(cors());
app.use(express.json());

// POST /login
router.post('/check-login', function (req, res) {
  console.log("auth =>> login");
  const { email, password } = req.body;

  memberModel.getLogin(email, password, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'server_error' });
    }

    // console.log("data", data);


    if (!data || !data.length) {
      // กรณี login fail
      return res.status(401).json({ error: 'invalid_credentials' });
    }

    // ดึง user ตัวแรก (ปรับให้เหมาะสม)
    const user = data[0];

    // console.log("user", user);


    // อย่าใส่ password กลับไปให้ client — ถ้ามี field รหัสให้ลบก่อน
    if (user.customer_password) delete user.customer_password;

    // สร้าง payload ของ JWT — ใส่เฉพาะข้อมูลจำเป็นเท่านั้น
    const payload = {
      sub: user.customer_code,
      username: user.customer_username
      // เพิ่มค่าอื่น ๆ ที่จำเป็น (แต่ระวังอย่าใส่ข้อมูลสำคัญเกินไป)
    };


    // console.log("payload", payload);

    // console.log("JWT_SECRET", JWT_SECRET);

    // console.log("JWT_EXPIRES_IN", JWT_EXPIRES_IN);


    // สร้าง token (JWT)
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    // console.log("token", {
    //   data: {
    //     token: token,
    //     user: user
    //   }
    // });


    // คืน response ให้ Nuxt Auth เหมาะกับ config ข้างบน
    return res.status(200).json({
      token: token,
      user: user

    });
  });
});

// middleware ตรวจ JWT สำหรับ /me
function verifyToken(req, res, next) {
  // console.log("verifyToken", req.headers);

  const authHeader = req.headers['authorization'] || req.headers['Authorization'] || req.headers['x-access-token'];

  // console.log("verifyToken authHeader ", authHeader);

  if (!authHeader) {
    return res.status(401).json({ error: 'No authorization header' });
  }

  // คาดว่าเป็นรูปแบบ "Bearer <token>"
  const parts = authHeader.split(' ');
  if (parts.length !== 2) {
    return res.status(401).json({ error: 'Invalid Authorization header' });
  }

  const scheme = parts[0];
  const token = parts[1];

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Invalid token scheme' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('JWT verify error', err);
      return res.status(401).json({ error: 'Invalid token' });
    }
    // เก็บข้อมูล decoded ไว้ใน req เพื่อใช้ต่อ
    req.userDecoded = decoded;
    next();
  });
}

// GET /me
router.get('/check-me', verifyToken, (req, res) => {
  console.log('auth =>> me (verified)');

  // ถ้าต้องการข้อมูล user เต็มจาก DB: ใช้ req.userDecoded.sub เพื่อ query
  // ในตัวอย่าง เราแสดงข้อมูลแบบง่าย (สมมติข้อมูล user เก็บไว้ใน DB หรือ cache)
  const customerCode = req.userDecoded.sub;

  // ตัวอย่าง: ดึงข้อมูล user ใหม่จาก DB ด้วย customerCode
  memberModel.getByCustomerCode(customerCode, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'server_error' });
    }
    if (!rows || !rows.length) {
      return res.status(404).json({ error: 'user_not_found' });
    }
    const user = rows[0];
    if (user.customer_password) delete user.customer_password;

    return res.status(200).json(
      user
    );
  });

  // ถ้าไม่อยาก query ใหม่ (ใช้ข้อมูลจาก token) สามารถส่งกลับได้ทันที:
  // res.status(200).json({ data: { user: req.userDecoded } });
});
app.use(router);

module.exports = {
  path: '/',
  handler: app
};

export default router