var express = require('express');
var router = express.Router();
const performersCtrl = require('../controllers/performers');

router.get('/new', performersCtrl.new);
router.get('/', performersCtrl.index);
router.post('/', isLoggedIn, performersCtrl.create);

function isLoggedIn(req, res, next){
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;