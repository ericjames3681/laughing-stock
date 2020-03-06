const Venue = require('../models/venue');

module.exports = {
    create, 
    update,
    delete: deleteReview
};

function deleteReview(req, res) {
    // Venue.find({}).populate('reviews.createdBy').exec(function(err, venues) {
    //     // The reviews array of venues will contain review subdocs with their createdBy property populated with user docs
    //   });
    Venue.findOne({'reviews._id': req.params.id}, function(err, venue){
        const reviewSubdoc = venue.reviews.id(req.params.id);
        if (!reviewSubdoc.createdBy._id.equals(req.user && req.user._id)) return res.redirect(`/venues/${venue._id}`);
        reviewSubdoc.remove();
        venue.save(function(err){
            if(err) return res.redirect(`/venues/${venue.id}`);
            res.redirect(`/venues/${venue.id}`);
        });
    }
)}

function create(req, res) {
    // Venue.find({}).populate('reviews.createdBy').exec(function(err, venues) {
    //     // The reviews array of venues will contain review subdocs with their createdBy property populated with user docs
    //   });
    Venue.findById(req.params.id, function(err, venue) {
        req.body.createdBy = req.user._id;
        console.log(req.body.createdBy);
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
    // if (!reviewSubdoc.createdBy.equals(req.user && req.user._id)) return res.redirect(`/venues/${venue._id}`);
        reviewSubdoc.content = req.body.content;
        reviewSubdoc.rating = req.body.rating;
        venue.save(function(err){
            if(err) return res.redirect(`/venues/${venue._id}`);
            res.redirect(`/venues/${venue._id}`);
        });
    });
}



