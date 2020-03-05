var express = require('express');
var router = express.Router();
const venuesCtrl = require('../controllers/venues');

/* GET /venues/new . */

router.get('/new', venuesCtrl.new);
router.get('/', isLoggedIn, venuesCtrl.index);
router.get('/:id', venuesCtrl.show);
router.post('/', isLoggedIn, venuesCtrl.create);

function isLoggedIn(req, res, next){
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
// router.get( '/users', usersCtrl.index);
module.exports = router;
