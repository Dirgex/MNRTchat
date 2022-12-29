const Pusher = require("pusher");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

require('dotenv').config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const app = express();
const port = 3001;

const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: "eu",
  useTLS: true
});



app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
  pusher.trigger("my-channel", "my-event", {
    message: "hello world"
  });
})

app.listen(port, () => console.log("Server started"));