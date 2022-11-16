const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    team1: {type:Schema.Types.ObjectId,ref:'Team'},
    team2: {type:Schema.Types.ObjectId,ref:'Team'},
    team1Score: Number,
    team2Score: Number,
});

module.exports = mongoose.model('Game', gameSchema)