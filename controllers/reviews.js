const Venue = require('../models/venue');

module.exports = {
    create
};

function create(req, res) {
    console.log(req.body);
    Venue.findById(req.params.id, function(err, venue) {
        venue.reviews.push(req.body);
        venue.save(function(err){
            if(err) return res.redirect(`/venues/${req.params.id}`);
            res.redirect(`/venues/${req.params.id}`);
        });
    });
}