import express from 'express';
const router = express.Router();

import sqlite3 from 'sqlite3';

// Create a new table with the given name
router.post('/create', function(req, res, next) {
  console.log(req);
  res.json({"message": req.body.tableName});
});





export default router;
