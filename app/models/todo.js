const { Schema, default: mongoose } = require("mongoose");

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: String,
  owner: {
    type: String,
    required: true,
  },
  status: String,
  priority: String,
  due_date: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  last_updated: {
    type: Date,
    default: Date.now(),
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
