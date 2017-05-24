const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!'
  },
  slug: String,
  description: {
    type: String,
    trime: true
  },
  tags: [String] // An array of strings
});

storeSchema.pre('save', function(next){
  if (!this.isModified('name')){
    return next(); // Skip it and Stop this function from running
  }
  this.slug = slug(this.name);
  next();
  // TODO make more resiliant so slugs are unique
});

module.exports = mongoose.model('Store', storeSchema);
