const nodemailer = require('nodemailer');
var express = require('express');
const { query } = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

 let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'kozhevnikova150188@gmail.com', // generated ethereal user
    pass: '22603092', // generated ethereal password
  },
});

router.post('/', async (req, res) => {  
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

