const Pusher = require("pusher");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const app = express();
const port = process.env.PORT || 5000;

//Create new pusher instance
const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: "eu",
  useTLS: true,
});

//Make our server have some extra security and a bodyparser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Pusher endpoint for user authenticating
app.post("/pusher/user-auth", async function (req, res) {
  //Getting all users in presence globalroom, make a check on if username is taken, if taken send an error status.
  const result = await pusher.get({
    path: "/channels/presence-globalroom/users",
  });
  if (result.status === 200) {
    const bodyRes = await result.json();
    const users = bodyRes.users;

    const found = users.find((u) => u.id === req.body.user);

    if (!found) {
      const socketId = req.body.socket_id;
      const userData = {
        id: req.body.user,
        user_info: {
          user: req.body.user,
          user_id: req.body.id,
        },
      };
      const auth = pusher.authenticateUser(socketId, userData);

      res.send(auth);
    } else {
      res.status(400).send("User exists");
      return;
    }
  }
});

//Pusher endpoint for authorization authorize people to use the channel.
app.post("/pusher/auth", async function (req, res) {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;

  const auth = pusher.authorizeChannel(socketId, channel);
  res.send(auth);
});

//Endpoint created to recieve message from frontend and trigger pusher event.
app.post("/message", (req, res) => {
  const reqBody = req.body;
  pusher.trigger("presence-globalroom", "message", reqBody);
  res.send(reqBody);
});

//Backend listening to port set and localhost
app.listen(port, () => console.log("Server started"));
