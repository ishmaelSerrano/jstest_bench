const express = require('express');
const course = express.Router();

const {users} = require('./data/users');
const {findCourseById} = require("./data/courses");

module.exports = (() => {

	course.use("*", (req, res, next) => {
		next();
	})

	course.get("/:id", (req, res) => {
		res.send(findCourseById(req.params.id));
	});

	course.get("/:handler", (req, res) => {
		res.send("Courses api Call to: " + req.params.handler);
	});

	course.use("*", (req, res) => {
		res.send("COURSES API CALL ENDED");
	});

	return course;
})();
