const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    state: String,
    team: String,
    wins: Number,
    losses: Number,
    conference: String,
})

module.exports = mongoose.model('Team', teamSchema)