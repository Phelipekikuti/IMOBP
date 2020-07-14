const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  date: String,
  name:String,
  number: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
});

module.exports = mongoose.model('Lead', LeadSchema);