const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    team1: { type: Schema.Types.ObjectId, ref: 'Team' },
    team1Score: { type: Number },
    team2Score: { type: Number },
});

module.exports = mongoose.model('Game', gameSchema)