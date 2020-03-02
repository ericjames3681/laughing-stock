const Venue = require('../models/venue');

module.exports = {
    new: newVenue,
    create
};

function newVenue(req, res) {
    res.render('venues/new');
}

function create(req, res) {
    req.body.twoDrink = !!req.body.twoDrink;
    const venue = new Venue(req.body);
    venue.save(function(err, doc) {
        if(err) return res.render('venues/new');
        console.log(venue);
        res.redirect('/venues/new');
    });
}