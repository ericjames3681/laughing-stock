const Venue = require('../models/venue');

module.exports = {
    create, 
    update,
    //delete: deleteReview

};

function create(req, res) {
    Venue.findById(req.params.id, function(err, venue) {
        req.body.createdBy = req.user._id;
        req.body.userName = req.user.name;
        console.log(req.body.userName);
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
        if (!reviewSubdoc.createdBy.equals(req.user && req.user._id)) return res.redirect(`/venues/${venue._id}`);
        reviewSubdoc.content = req.body.content;
        reviewSubdoc.rating = req.body.rating;
        venue.save(function(err){
            if(err) return res.redirect(`/venues/${venue._id}`);
            res.redirect(`/venues/${venue._id}`);
        });
    });
}


