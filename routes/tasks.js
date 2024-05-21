const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controlers/tasks");

// CRUD methods for /api/v1/tasks
// get all tasks && Create a task
router.route("/").get(getAllTasks).post(createTask);
// get a task by id && update a task && delete a task
router.route("/:id").get(getOneTask).patch(updateTask).delete(deleteTask);

module.exports = router;
