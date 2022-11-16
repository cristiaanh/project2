const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
    teams: [{type:Schema.Types.ObjectId,ref:'Team'}],
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", userSchema);
