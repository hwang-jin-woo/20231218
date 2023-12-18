
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
  const sql_favoritehp = 'SELECT * FROM favoritehp';

  db.query(sql_favoritehp, (err, results) => {
    if (err) {
      console.error('데이터 가져오기 오류: ' + err.message);
      res.status(500).json({ error: '데이터 가져오기 오류' });
    } else {
      const favoritehpData = results.map((row) => ({
        hp_name: row.hp_name,
        uid: row.uid,
      }));
      res.json(favoritehpData);
    }
  });
});

module.exports = router;


