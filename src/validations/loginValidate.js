exports.ValidateSignUp = (req, res, next) => {
  var { phoneNumber, name, password } = req.body;
  var errors = [];

  if (!name || name.length < 6) {
    errors.push({
      key: "name",
      message: "نام کاراکتر باید حداقل 6 کاراکتر باشد",
    });
  }
  if (!password || password.length <4) {
    errors.push({
      key: "password",
      message: "نام عبور باید حداقل 4 کاراکتر باشد",
    });
  }
  if (errors.length > 0) {
    return res.status(400).json({ errors: errors });
  }
  next();
};
