var express = require("express");
const { Server } = require("http");
const cors = require("cors");
var app = express();
var http = require("http").Server(app);

app.use(express.static(__dirname + "/www"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);

let server = http.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("My first nodejs server");
  console.log("Server listening on: " + host + " port: " + port);
});

const User = require("./user.js");
const users = JSON.parse(
  require("./user-list.js").readJsonAsString("data.json")
);

app.post("/api/auth", function (req, res) {
  if (!req.body) {
    return res.sendStatus(400);
  }

  let user = new User("", "", null, "", "");

  for (let i = 0; i < users.length; i++) {
    if (
      (req.body.email == users[i].email ||
        req.body.email == users[i].username) &&
      req.body.password == users[i].password
    ) {
      user.username = users[i].username;
      user.birthdate = users[i].birthdate;
      user.age = users[i].age;
      user.email = users[i].email;
      user.valid = true;
    }
  }
  if (user.valid) {
    res.send(user);
  } else {
    res.send({ valid: false });
  }
});
