var express = require('express');
var router = express.Router();
const venuesCtrl = require('../controllers/venues');
/* GET /venues/new . */
router.get('/new', venuesCtrl.new);
// router.get('/', venuesCtrl.index);
router.post('/', venuesCtrl.create);

// router.get( '/users', usersCtrl.index);
module.exports = router;
