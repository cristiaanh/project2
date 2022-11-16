const Team = require('../models/team');
const User = require('../models/user');

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
      const foundTeam = await Team.findById(req.params.id).populate({path:'user'}) 
      const user = await User.findById(foundTeam.user._id)
      const teamIndex = user.teams.indexOf(foundTeam._id)
      user.teams.splice(teamIndex,1)
      await Team.findByIdAndDelete(req.params.id)
      await user.save()
    } catch (error) {
        console.log(error) 
        
    }
}

//update team function
//controller team function to pass information to create a new game
//bootstrap nav bar and coloring
//populate paths game / for each in a show page of each team/ index function but for show & find by id
//.put route to update team, .post to create game /game/new, .get to render show page