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

app.post("/pusher/user-auth", async function(req,res){
 // user = whoIsLoggedIn();
 const socketId = req.body.socket_id;
  const userData = {
    id : req.body.userid,
    user_info: {
      user: req.body.user,
    }
  }
  const auth = pusher.authenticateUser(socketId, userData);
  res.send(auth)
})

app.post("/pusher/auth", async function (req, res) {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authorizeChannel(socketId, channel);
  res.send(auth);
});

app.post('/message', (req, res) => {
  const reqBody = req.body;
  pusher.trigger('presence-globalroom', 'message', reqBody);
  res.send(reqBody)
});


// app.post('/username/post', (req, res) => {
//   reqBody.unshift(req.body);

//   pusher.trigger('check', 'connection', reqBody);
//   //pusher.trigger('global_room', 'message', reqBody);
//   res.send(reqBody)
// });

// app.delete('/username/delete', (req,res)=> {
//   reqBody.splice(reqBody.indexOf(req.body.username), 1);
//   pusher.trigger('check', 'connection', reqBody);
//   res.send(reqBody);
// })

app.listen(port, () => console.log("Server started"));