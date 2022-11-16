const team = require('../models/team');
const Team = require('../models/team');

module.exports = {
    index,
    new: newTeam,
    show,
    create,
    deleteTeam
};

function index(req, res) {
    Team.find({}, function(err, teams) {
        res.render('teams/index', { title: 'All Teams', teams });
    });
}

function newTeam(req, res) {
    res.render('teams/new', { title: 'Add Team' });
}

function show(req, res) {
    Team.findById(req.params.id);
}

function create(req, res) {
    const team = new Team(req.body);
    team.save(function(err) {
        if (err) return res.redirect('/teams/new');
        res.redirect('/teams')
    })
}

async function deleteTeam(req, res) {
    try {
      const foundTeam = await team.findById(req.params.id)  
    } catch (error) {
        console.log(error) 
        
    }
}