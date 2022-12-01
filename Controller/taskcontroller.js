const Tasks = require("../models/task");
const asyncWrapper = require("../middleware/asyncWrapper");
// getalltask "/tasks"
const getTasks =asyncWrapper(async (req, res) => {
  
    const tasks = await Tasks.find();
    res.status(200).json({ NoOfTasks: tasks.length, data: tasks });
});
// create task/tasks req.body
const createTask =asyncWrapper( async (req, res) => {
  // req.body = title and discription
  
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(401).json({ msg: "please provide neccesary values" });
}
    const task = await Tasks.create(req.body);
    //  const task = await Tasks.create({title, description})
    res.status(201).json({ data: task });

});

// get single /tasks/:taskid req.body
const singleTask = asyncWrapper( async (req, res) => {
  
    const { taskId } = req.params;

    const task = await Tasks.findById({ _id: taskId });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `The Task with id ${taskId} can not be found` });
    }
    res.status(200).json({ data: task });
 
});

// updating a task

const updateTask = asyncWrapper( async (req, res) => {
  
    const { taskId } = req.params;
    const { title, description, completed } = req.body;
    const userBody = req.body;
    const updatedTask = await Tasks.findByIdAndUpdate(
      { _id: taskId },
      userBody,
      { new: true, runValidators: true }
    );
    if (!updatedTask) {
      return res
        .status(404)
        .json({ msg: `Task with the id: ${taskId} not found` });
    }
    res.status(200).json({ msg: "Task updated", data: updatedTask });
 
});
//  delete a task
const deleteTask = asyncWrapper( async (req, res) => {
  
    const { taskId } = req.params;
    const Task = await Tasks.findByIdAndDelete({ _id: taskId });
    if (!Task) {
      return res
        .status(404)
        .json({ msg: `The Task with id ${taskId} can not be found` });
    }
    res.status(200).json({ msg: "Task has been deleted", data: Task });
 
});

module.exports = { getTasks, createTask, singleTask, deleteTask, updateTask };
