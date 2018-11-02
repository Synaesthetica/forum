import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    "id": 1,
    "name":"Jim",
    "friend":"Bob",
  },
  {
    "id": 2,
    "name":"Bob",
    "friend":"Jim",
  }])
});

export default router;
