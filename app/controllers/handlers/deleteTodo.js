const { ObjectId } = require("mongodb");
const Todo = require("../../models/todo");

exports.deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    if (!ObjectId.isValid(todoId)) {
      return res.status(400).json({ error: "Invalid Todo ID" });
    }

    const deletedTodo = await Todo.findByIdAndRemove(todoId);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    } else {
      const todos = await Todo.find({});
      res.status(200).json(todos);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Oops! An error occurred" });
  }
};
