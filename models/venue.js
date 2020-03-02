var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var venueSchema = new Schema({
    name: String,
    address: String,
    priceTix: {
        type: String,
        enum: [ '$', '$$', '$$$']
    },
    twoDrink: Boolean,
  }, {
    timestamps: true
});

module.exports = mongoose.model('Venue', venueSchema);