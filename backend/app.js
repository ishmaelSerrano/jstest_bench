const express = require('express');
const env = require("dotenv").config();
const bodyParser = require('body-parser');
const session = require("express-session");
const path = require('path')
var cookieParser = require('cookie-parser')

const app = express();

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

//************************
//API ROUTES
//************************

app.use((req, res, next) => {
  let origin = req.headers.origin;
  res.header("Access-Control-Allow-Origin", req.headers.host.indexOf("localhost") > -1 ? "http://localhost:4200" : origin);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control");
  res.header('Access-Control-Allow-Credentials', true);

  next();
});

app.use("/api/user", require('./user'));

app.use("/api/courses", require('./courses'));

app.use("/api/course", require('./course'));

app.post("/bad-actor", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.get("/cookie-dump", (req, res) => {
  console.log(req.cookies);
  res.sendStatus(200);
});

app.use("/bad-actor", express.static(path.join(__dirname, 'bad-actor')));

//************************
//START APP
//************************
app.listen(env.PORT | 3001, () => {
  console.log(`API SERVER IS RUNNING ON PORT ${env.PORT | 3001}!`);
});
