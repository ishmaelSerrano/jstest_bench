const express = require('express');
const courses = express.Router();

const {findCourses} = require('./data/courses');

module.exports = (() => {

  courses.use("*", (req, res, next) => {
    next();
  })

  // returns courses based on following conditions, copied from the findCourses function comments:
  // 1 returns all the courses in the getIds column that have the category in the getCategory
  // 2 if only given a category returns all courses with that category
  // 3 if only given a getIds array returns all those courses
  // 4 returns empty array if the courses in getIds don't contain the getCategory
  // 5 returns all courses when no arguments are given
  // example call: /api/courses?id=1,2,3&category=enrolled-suggestion: will return courses 1,2,3 that have category 'enrolled-suggestion'
  courses.get("/", (req, res) => {
    const category = req.query.category || '';
    res.send(findCourses({category}));
  })


  courses.get("/:handler", (req, res) => {
    res.send("Courses api Call to: " + req.params.handler);
  });

  courses.use("*", (req, res) => {
    res.send("COURSES API CALL ENDED");
  });

  return courses;
})();
