var express = require('express');
var router = express.Router();
const venuesCtrl = require('../controllers/venues');


router.get('/new', venuesCtrl.new);
router.get('/', venuesCtrl.index);
router.get('/:id', venuesCtrl.show);
router.post('/', isLoggedIn, venuesCtrl.create);

function isLoggedIn(req, res, next){
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
