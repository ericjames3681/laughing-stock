var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/venues/:id/reviews', reviewsCtrl.create);
router.put('venues/:venueid/reviews/:reviewid', reviewsCtrl.update)

module.exports = router;