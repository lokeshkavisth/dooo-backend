const Todo = require("../../../models/todo");

exports.midPriority = async (req, res) => {
  try {
    const todos = await Todo.find({ priority: "mid" });

    if (todos) {
      res.status(200).json(todos);
    } else {
      res.status(404).json({ message: "No todos found with mid priority" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Oops! An error occurred" });
  }
};
