const { User, Todo } = require("../db");
const authenticateUser = require("../middleware/authenticateUser");
const verifyTodo = require("../middleware/verifyTodo");
const verifyId = require("../middleware/verifyId");
const { Router } = require("express");
const router = Router();
router.get("/list", authenticateUser, async (req, res) => {
  //fetch all todos
  const user = await User.findOne({ email: req.email });
  const todos = await Todo.find({
    _id: { $in: user.todos },
  });
  if (todos) {
    res.json({
      todos: todos,
    });
  } else {
    res.json({ msg: "No todos found" });
  }
});
router.post("/add", authenticateUser, verifyTodo, async (req, res) => {
  //first create the todo
  const todo = await Todo.create({
    title: req.body.title,
    description: req.body.description,
    completed: false,
  });
  //then update the todo
  await User.updateOne(
    { email: req.email },
    {
      $push: { todos: todo._id },
    }
  );
  res.status(201).json({ msg: "todo added" });
});
router.put("/complete", authenticateUser, verifyId, (req, res) => {
  Todo.updateOne({ _id: req.body.id }, { completed: true }).then(() => {
    res.status(201).json({
      msg: "todo marked as done",
    });
  });
});
module.exports = router;
