var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');


router.post('/venues/:id/reviews', isLoggedIn, reviewsCtrl.create);
router.put('/reviews/:id', isLoggedIn, reviewsCtrl.update)

function isLoggedIn(req, res, next){
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;