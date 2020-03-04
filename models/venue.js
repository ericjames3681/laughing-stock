var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var reviewSchema = new Schema({
  
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

var venueSchema = new Schema({
    name: String,
    address: String,
    priceTix: {
        type: String,
        enum: [ '$', '$$', '$$$']
    },
    twoDrink: Boolean,
    events: [],
  }, {
    timestamps: true
});

module.exports = mongoose.model('Venue', venueSchema);