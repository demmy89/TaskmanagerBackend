
const mongoose = require('mongoose')
const Schema = require("mongoose").Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("task", taskSchema);
