var mongoose = require('mongoose');


const Schema = mongoose.Schema;

var reviewSchema = new Schema({
  content: {
    type: String, 
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 3
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

var venueSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    address: String,
    priceTix: {
        type: String,
        enum: [ '$', '$$', '$$$']
    },
    twoDrink: {
      type: Boolean,
      default: false
    },
    reviews: [reviewSchema]
  }, {
    timestamps: true
});

module.exports = mongoose.model('Venue', venueSchema);