const Venue = require('../models/venue');

module.exports = {
    create, 
    update,

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


function update(req, res) {
    Venue.findOne({'reviews._id': req.params.id}, function(err, venue){
        const reviewSubdoc = venue.reviews.id(req.params.id);
        reviewSubdoc.content =req.body.content;
        venue.save(function(err){
            if(err) return res.redirect(`/venues/${req.params.id}`);
            res.redirect(`/venues/${req.params.id}`);
        });
    });
};
