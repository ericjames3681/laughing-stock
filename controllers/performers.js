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
                if(performer.favoritedBy.indexOf(req.user.id) !== -1){
                    res.redirect('/performers');
                } 
                else {
                    performer.favoritedBy.push(req.user._id);
                    performer.save(function(err) {
                        res.redirect('/performers');
                    });
                }
                });                   
            }     
        else {
            res.redirect('/performers');
        }
    });
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
        res.redirect('/performers/new');
    });
}