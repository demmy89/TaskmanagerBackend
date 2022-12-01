const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  singleTask,
  deleteTask,
  updateTask,
} = require("../Controller/taskcontroller");

// getalltask "/tasks"

// router.get("/tasks", getTasks);

// create task/tasks req.body
// router.post("/tasks", createTask);

// get single /tasks/:taskid req.body

// router.get("/tasks/:taskId", singleTask);

// updating a
// router.patch("/tasks/:taskId", updateTask);

//  delete a task
// router.delete("/tasks/:taskId", deleteTask);

router.route("/").get(getTasks).post(createTask);
router.route("/:taskId").get(singleTask).delete(deleteTask).patch(updateTask);

module.exports = router;
