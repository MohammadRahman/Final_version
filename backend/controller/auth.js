const User = require("../models/user");
const jwt = require("jsonwebtoken"); // to generate signed token
const expressJwt = require("express-jwt"); // for authorization check
const { errorHandler } = require("../helpers/dbErrorHandler");

const jwtSecrate = "asefjlkadsfj";

exports.signup = (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err),
      });
    }
    (res.salt = undefined), (res.hashed_password = undefined);
    res.json({
      user,
    });
  });
};
// update user's email and password
exports.updateUserInfo = (req, res) => {
  const { email, newEmail, password } = req.body;
  console.log(req.body);
  User.findOneAndUpdate(
    { email },
    { email: newEmail, password: password },
    { new: true },
    function (err, result) {
      if (err || !result) {
        console.log("error is ", err);
        return res.status(400).json({
          error: "Error updating user",
        });
      }

      console.log(" final line before return");
      return res.json({ result, message: "User updated" });
    }
  );
};

exports.signin = (req, res) => {
  // find the user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "user with that email does not exist. Please signup",
      });
    }

    // create authenticate method in user model
    if (!user.authenticate(password))
      return res.status(400).json({
        error: "Email and password don't match",
      });
    // generate signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, jwtSecrate);

    // persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });

    // return response with user and token to front-end client
    const { _id, name, email } = user;
    return res.json({
      token,
      user: { _id, email, name },
      message: "Signin Success",
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({
    message: "Signout Success",
  });
};

exports.requireSignIn = expressJwt({
  secret: jwtSecrate,
  userProperty: "auth",
});
