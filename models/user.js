const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String},
    googleId: {
      type: String,
      required: true,
    },
    email: { type: String},
    avatar: { type: String},
    teams: [{type:Schema.Types.ObjectId,ref:'Team'}],
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", userSchema);
