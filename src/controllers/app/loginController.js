const User = require("../../models/user");

exports.SignUp = (req, res) => {
  var { phoneNumber, name, password } = req.body;
  var newUser = new User({
    phoneNumber: phoneNumber,
    name: name,
    password: password,
  });
  newUser.save((err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "در ارتباط با سرور مشکلی پیش آمده است." });
    }
    return res.status(200).json({ userId: result._id });
  });
};
