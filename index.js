const express = require('express');
const app = express();
const port = process.env.PORT || 7779;
const sendMessageRouter = require('./sendMessageRouter');
const formRouter = require('./formRouter');
const cors = require('cors');
const corsOptions = {
  origin: '*'
}
const bodyParser = require('body-parser');

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', formRouter);
app.use('/sendMessage', sendMessageRouter);
app.use((req,res) => {
  res.send(404)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

