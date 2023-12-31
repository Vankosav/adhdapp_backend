const express = require("express");
const router = express.Router();
const { getProject, createProject, updateProject, deleteProject } = require("../controllers/projectController.js");



const {isAuthenticated} = require('../middleware/jwt.middleware')


router.route("/project").get(isAuthenticated, getProject);
console.log('Request reached /dashboard endpoint');
router.route("/project").post(isAuthenticated, createProject);
console.log('Request reached /dashboard endpoint');
router.route("/project/").put(isAuthenticated, updateProject);
console.log('Request reached /dashboard endpoint');