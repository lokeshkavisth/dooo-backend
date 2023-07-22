const express = require("express");

// api request logics
const { addTodo } = require("../controllers/handlers/addTodo");
const { allTodos } = require("../controllers/handlers/allTodos");
const { todoById } = require("../controllers/handlers/todoById");
const { updateTodo } = require("../controllers/handlers/updateTodo");
const { deleteTodo } = require("../controllers/handlers/deleteTodo");
const { clearTodos } = require("../controllers/handlers/clearTodos");
const {
  highPriority,
} = require("../controllers/handlers/priotries/highPriority");
const {
  midPriority,
} = require("../controllers/handlers/priotries/midPriority");
const {
  lowPriority,
} = require("../controllers/handlers/priotries/lowPriority");

// expres router
const router = express.Router();

// get all todos
router.get("/", allTodos);

// create todo
router.post("/add", addTodo);

// delete all todos
router.delete("/clear", clearTodos);

// Low priority
router.get("/low", lowPriority);

// Mid priority
router.get("/mid", midPriority);

// High priority
router.get("/high", highPriority);

// select an todo based on his id
router.get("/:id", todoById);

// update an specific todo
router.put("/update/:id", updateTodo);

// delete an specific todo
router.delete("/delete/:id", deleteTodo);

module.exports = router;
