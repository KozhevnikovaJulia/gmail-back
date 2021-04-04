const nodemailer = require('nodemailer');
const express = require('express');
const { query } = require('express');
const router = express.Router();
const login = process.env.LOGIN || '---';
const password = process.env.PASSWORD || '----';

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', async (req, res) => {  
  res.send('form');
});

module.exports = router;

