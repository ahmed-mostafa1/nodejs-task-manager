const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("All Tasks");
};
const getOneTask = (req, res) => {
  res.json({ id: req.params.id });
};
const createTask = (req, res) => {
  res.json(req.body);
};
const updateTask = (req, res) => {
  res.send("Updata a task");
};
const deleteTask = (req, res) => {
  res.send("Delete a Task");
};
module.exports = {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
};
