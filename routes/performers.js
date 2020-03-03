var express = require('express');
var router = express.Router();
const performersCtrl = require('../controllers/performers');

router.get('/new', performersCtrl.new);
// router.get('/', performersCtrl.index);
router.post('/', performersCtrl.create);

module.exports = router;