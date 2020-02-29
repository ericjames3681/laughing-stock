var express = require('express');
var router = express.Router();

const passport = require('passport');
const indexCtrl = require('../controllers')

router.get('/', indexCtrl.index);
/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/users');
});

router.get('/auth/google', passport.authenticate('google',
  { scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate('google',
  {
    successRedirect: '/',
    failureRedirect: '/',
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
