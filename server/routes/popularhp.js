
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
  const sql_popularhp = 'SELECT * FROM popularhp';

  db.query(sql_popularhp, (err, results) => {
    if (err) {
      console.error('데이터 가져오기 오류: ' + err.message);
      res.status(500).json({ error: '데이터 가져오기 오류' });
    } else {
      const popularhpData = results.map((row) => ({
        hp_name: row.hp_name,
        hp_review: row.hp_review,
      }));
      res.json(popularhpData);
    }
  });
});

module.exports = router;


