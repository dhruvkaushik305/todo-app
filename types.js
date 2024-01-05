const zod = require("zod");
const userValid = zod.object({
  email: zod.string().email(),
  password: zod.coerce.string().min(4),
});
const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});
const updateTodo = zod.object({
  id: zod.string(),
});
module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
  userValid: userValid,
};
