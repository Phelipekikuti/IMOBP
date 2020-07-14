const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  name: String,
  types: [String],
  city: String,
  price: Number,
  differentials: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true,
  }
});

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://192.168.0.130:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);