const Todo = require("../../models/todo");

exports.addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Validate input
    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "Title and description are required" });
    }
    // create new todo
    const newTodo = new Todo(req.body);
    await newTodo.save();
    // send back the created todo as json document
    res.status(200).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Oops! An error occurred" });
  }
};
