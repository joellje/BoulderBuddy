const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = mongoose.Schema({
  username: {
    type: String,
  },
  googleId: {
    type: String,
  },
  status: {
    type: String,
    default: "active",
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
