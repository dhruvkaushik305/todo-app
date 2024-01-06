const { userValid } = require("../types");
module.exports = (req, res, next) => {
  const credentials = userValid.safeParse(req.body);
  if (!credentials.success) {
    return res.status(400).json({
      msg: "Wrong input format",
      error: credentials.error.issues,
    });
  } else {
    next();
  }
};
