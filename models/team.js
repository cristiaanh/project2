const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    state: String,
    team: String,
    wins: Number,
    losses: Number,
    games: [{type:Schema.Types.ObjectId,ref:'Game'}],
    user: {type:Schema.Types.ObjectId,ref:'User'}, 
})

module.exports = mongoose.model('Team', teamSchema)