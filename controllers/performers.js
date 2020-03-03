const Performer = require('../models/performer');

module.exports = {
    index,
    new: newPerformer,
    create
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
    //performer.createdBy = req.user._id;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    performer.save(function(err, doc) {
        if(err) return res.render('performers/new', { performer, user: req.user});
        console.log(performer);
        res.redirect('/performers/new');
    });
}