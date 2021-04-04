const nodemailer = require('nodemailer');
const express = require('express');
const { query } = require('express');
const router = express.Router();
const cors = require('cors'); 
const login = process.env.LOGIN || '---';
const password = process.env.PASSWORD || '----';

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
 
 let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: login, // generated ethereal user
    pass: password, // generated ethereal password
  },
});
router.get('/', async (req, res) => {  
  res.send('sendMessage');
});

router.post('/',  async (req, res) => {  
  let { email, name, message } = req.body
  let info = await transporter.sendMail({
  from: 'Portfolio Page', // sender address
  to: "Kozhevnikova1501@yandex.ru", // list of receivers
  subject: "Message from Portfolio Page", // Subject line
  html:
   `"<b>Сообщение с Portfolio Page</b>"
  <div> Email: ${email} </div>
  <div> Name: ${name} </div>
  <div> Message: ${message} </div>`, // html body
});
  res.send('Письмо отправляется');
});

module.exports = router;

