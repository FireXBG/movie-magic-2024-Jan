const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function () {
  const hash = (this.password = await bcrypt.hash(this.password, 12));
  this.password = hash;
});

const user = model("User", userSchema);

module.exports = user;
