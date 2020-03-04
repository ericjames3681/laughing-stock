var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var performerSchema = new Schema({
    name: String,
    touring: Boolean,
    funny: {
        type: String,
        enum: [ 'Meh', 'Sure', 'Hilarious!']
    },
    favoritedBy: [],
  }, {
    timestamps: true
});

module.exports = mongoose.model('Performer', performerSchema);