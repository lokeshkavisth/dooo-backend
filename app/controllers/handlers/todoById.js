const { ObjectId } = require("mongodb");
const Todo = require("../../models/todo");

exports.todoById = async (req, res) => {
  try {
    const todoId = req.params.id;
    if (!ObjectId.isValid(todoId)) {
      return res.status(400).json({ error: "Invalid Todo ID" });
    }
    const todo = await Todo.find({ _id: todoId });
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! an error occurred");
  }
};
