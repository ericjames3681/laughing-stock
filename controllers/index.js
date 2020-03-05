const User = require('../models/user');

module.exports = {
    index
}

function index(req, res) {
        // Venue.find({}).populate('reviews.createdBy').exec(function(err, venues) {
    //     // The reviews array of venues will contain review subdocs with their createdBy property populated with user docs
    //   });
    res.render('index', {
        user: req.user
    });
}