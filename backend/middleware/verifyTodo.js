const { createTodo } = require("../../types");
module.exports = (req, res, next) => {
  const todo = createTodo.safeParse(req.body);
  if (!todo.success) {
    return res.status(400).json({
      msg: "Wrong input format",
      error: todo.error.issues,
    });
  } else {
    next();
  }
};
