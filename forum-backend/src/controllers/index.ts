import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req : Request, res : Response, next : NextFunction) {
  res.json({"info":"Nope, there's only trash here."});
});

export default router;
