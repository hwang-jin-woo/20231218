
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
  const sql_distancehp = 'SELECT * FROM distancehp';

  db.query(sql_distancehp, (err, results) => {
    if (err) {
      console.error('데이터 가져오기 오류: ' + err.message);
      res.status(500).json({ error: '데이터 가져오기 오류' });
    } else {
      const distancehpData = results.map((row) => ({
        hp_name: row.hp_name,
        distance: row.distance,
      }));
      res.json(distancehpData);
    }
  });
});

module.exports = router;


