const Performer = require('../models/performer');

module.exports = {
    index,
    new: newPerformer,
    create,
    addFav
}

function addFav(req, res) {
    Performer.findOne({ _id: req.params.id, favoritedBy: req.user._id }, function(err, performer) {
        if(!performer) {
            Performer.findById(req.params.id, function(err, performer) {
                performer.favoritedBy.push(req.user._id);
                performer.save(function() {
                    res.redirect('/performers');
                });
            });
        } else {
            res.redirect('/performers');
        }
    });
    // Performer.findById(req.params.id, function(err, performer) {
        // const subdoc = performer.favoritedBy[0];
        // console.log(subdoc) // { _id: '501d86090d371bab2c0341c5', name: 'Liesl' }
        // subdoc.isNew;
        // if (performer.favoritedBy.id(req.user._id)) return res.redirect('/performers');
        // performer.favoritedBy.push(req.user._id);
        // performer.save(function(err) {
        //   res.redirect(`/performers/${performer._id}`);
        // });
    //   });

}

function index(req, res) {
    Performer.find({}, function(err, performers) {
        if (err) return next(err);
        res.render('performers/index', {
            title: 'All Performers',
            performers, 
            user: req.user,
            name: req.query.name});
    });
}

function newPerformer(req, res) {
    res.render('performers/new', {
        title: 'Add Performer',
        user: req.user});
}

function create(req, res) {
    req.body.touring = !!req.body.touring;
    const performer = new Performer(req.body);
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    performer.save(function(err, doc) {
        if(err) return res.render('performers/new', { performer, user: req.user});
        console.log(performer);
        res.redirect('/performers/new');
    });
}