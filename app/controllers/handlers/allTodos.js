const Todo = require("../../models/todo");

exports.allTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find({});
    if (!allTodos) {
      return res.status(204).send("No content found");
    } else res.status(200).json(allTodos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Oops! An error occurred" });
  }
};
