const mongoose = require("mongoose");
// const uuidv1 = require("uuid/v1");

const crypto = require("crypto");
// uuidv1();
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    history: String,
  },

  { timestamps: true }
);

// virtual
userSchema
  .virtual("password")
  .set(function (password) {
    (this._password = password), (this.salt = "alksjdflkasdjfals");
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// methods
userSchema.methods = {
  // authenticate
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) == this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (error) {
      return "";
    }
  },
};
