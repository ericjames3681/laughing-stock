const Venue = require('../models/venue');

module.exports = {
    index,
    new: newVenue,
    create,
};

function index(req, res) {
    Venue.find({}, function(err, venues) {
        if (err) return next(err);
        res.render('venues/index', {
            title: 'All Venues',
            venues, 
            user: req.user,
            name: req.query.name});
    });
}
function newVenue(req, res) {
    res.render('venues/new', {
        title: 'Add Venue',
        user: req.user});
}
function create(req, res) {
    req.body.twoDrink = !!req.body.twoDrink;
    const venue = new Venue(req.body);
    venue.save(function(err, doc) {
        if(err) return res.render('venues/new', {venue, user: req.user});
        console.log(venue);
        res.redirect('/venues');
    });
}
