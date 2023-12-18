// test.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'marinere!!23', 
  database: 'hospital', 
});

router.get('/', (req, res) => {
  const sql_member = 'SELECT * FROM member';

  db.query(sql_member, (err, results) => {
    if (err) {
      console.error('데이터 가져오기 오류: ' + err.message);
      res.status(500).json({ error: '데이터 가져오기 오류' });
    } else {
      const memberData = results.map((row) => ({
        user_id:row.user_id,
        user_pw:row.user_pw,
        user_name:row.user_name,
        user_gender:row.user_gender,
        user_phone:row.user_phone,
        user_birth:row.user_birth,
        user_location:row.user_location,
      }));
      res.json(memberData);
    }
  });
});





module.exports = router;


