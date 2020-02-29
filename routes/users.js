var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get( '/users', usersCtrl.index);
module.exports = router;
