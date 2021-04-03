const express = require('express');
const app = express();
const port = process.env.PORT || 7779;
const sendMessageRouter = require('./sendMessageRouter');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/sendMessage', sendMessageRouter);
app.use((req,res) => {
  res.send(404)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
