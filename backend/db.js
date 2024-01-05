const mongoose = require("mongoose");
main();
async function main() {
  await mongoose.connect(
    "mongodb+srv://admin:ti08WdiqzcDmNGA5@cluster0.adwvqxz.mongodb.net/todoApp"
  );
}
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const User = mongoose.model("User", userSchema);
const Todo = mongoose.model("Todo", todoSchema);
module.exports = { User, Todo };
