const Todo = require("../../models/todo");

exports.clearTodos = async (req, res) => {
  try {
    await Todo.deleteMany({});
    res.status(200).send("Todos deleted successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Oops! An error occurred" });
  }
};
