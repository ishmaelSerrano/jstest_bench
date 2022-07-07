const express = require('express');
const user = express.Router();

const {loginUser, USERS} = require('./data/users');
const {findCourses, COURSES} = require('./data/courses');
const session = require('express-session');

module.exports = (() => {

  user.use("*", (req, res, next) => {
    next();
  });

  user.get("/info", (req, res) => {
    res.send(req.session);
  });

  user.post('/courses',(req,res)=>{
    const user = USERS.find(user => user.id === req.body.userId);
    const courses = findCourses({ids: user.courses})
    res.send(courses);
  });

  user.post("/register", (req, res) => {
    const {username, password, email, name} = req.body;
  });

  user.post("/login", (req, res) => {
    let session = req.session;
    const {username, password} = req.body;
    let user = loginUser(username, password);
    user.expandedCourses = findCourses({ids: user.courses})
    session.user = user;
    res.send(user);
  });

  user.post("/logout", (req, res) => {
    req.session.destroy();
    res.send('logged out');
  });

  user.get("/:handler", (req, res) => {
    res.send("User API Call to: " + req.params.handler);
  });

  user.use("*", (req, res) => {
    res.send("USER API CALL ENDED");
  });

  return user;
})();
