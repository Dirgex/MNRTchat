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

const reqBody = [];

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/message', (req, res) => {
  const reqBody = req.body;
  pusher.trigger('global_room', 'message', reqBody);
  res.send(reqBody)
});

app.get('/username/get', (req, res) => {
  //pusher.trigger('global_room', 'message', reqBody);
  res.send(reqBody)
});



app.post('/username/post', (req, res) => {
  reqBody.push(req.body.username);
  //pusher.trigger('global_room', 'message', reqBody);
  res.send(reqBody)
});

app.listen(port, () => console.log("Server started"));