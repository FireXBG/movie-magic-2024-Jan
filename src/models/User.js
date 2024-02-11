const { Schema, model, MongooseError } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    match: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+&/, "Invalid Email Adress"],
    minLength: [10, "Email should be at least 10 characters long"],
  },
  password: {
    type: String,
    required: true,
    match: [
      /^[a-zA-Z0-9]+&/,
      "Password should contain only english letters and digits",
    ],
  },
});

userSchema.pre("save", async function () {
  const hash = (this.password = await bcrypt.hash(this.password, 12));
  this.password = hash;
});

userSchema.virtual("rePassword").set(function (value) {
  // Validate password

  if (value !== this.password) {
    throw new MongooseError("Password missmatch!");
  }
});

const user = model("User", userSchema);

module.exports = user;
