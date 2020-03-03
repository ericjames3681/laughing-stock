const Venue = require('../models/venue');

module.exports = {
    // show,
    new: newVenue,
    create,
};

function newVenue(req, res) {
    res.render('venues/new', {
    user: req.user}
    );
}
function index(req, res) {
    res.render('index', {
        user: req.user
    });
}
function create(req, res) {
    req.body.twoDrink = !!req.body.twoDrink;
    const venue = new Venue(req.body);
    venue.save(function(err, doc) {
        if(err) return res.render('venues/new', {venue, user: req.user});
        console.log(venue);
        res.redirect('/venues/new');
    });
}

// function show(req, res) {
//     res.redirect('venues/show');
// }