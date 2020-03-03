const Performer = require('../models/performer');

module.exports = {
    new: newPerformer,
    create
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