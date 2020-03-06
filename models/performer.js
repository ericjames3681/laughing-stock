var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var performerSchema = new Schema({
    name: String,
    touring: {
        type: Boolean,
        default: false
    },
    funny: {
        type: String,
        enum: [ 'Meh', 'Sure', 'Hilarious!']
    },
    favoritedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Performer', performerSchema);