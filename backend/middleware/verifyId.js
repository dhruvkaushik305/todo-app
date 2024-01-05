const { updateTodo } = require("../../types");

module.exports = (req, res, next) => {
  const id = updateTodo.safeParse(req.body);
  if (!id.success) {
    return res.status(400).json({
      msg: "Wrong input format",
      error: id.error.issues,
    });
  } else {
    next();
  }
};
