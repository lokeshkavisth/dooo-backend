const { ObjectId } = require("mongodb");
const Todo = require("../../models/todo");

exports.updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    if (!ObjectId.isValid(todoId)) {
      return res.status(400).json({ error: "Invalid Todo ID" });
    }

    const { title, description, status, priority, owner, category, due_date } =
      req.body;

    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: todoId },
      {
        title,
        description,
        status,
        priority,
        owner,
        category,
        due_date,
      },
      {
        // Return the updated document
        new: true,

        // Do not create a new document if it doesn't exist
        upsert: false,
      }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! an error occurred");
  }
};
