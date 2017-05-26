const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homepage = (req, res) => {
  res.render('index');
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
};

exports.createStore = async (req, res) => {
  const store = new Store(req.body);
  await store.save();
  res.redirect('/');
  req.flash('success', `Successfully Created ${store.name}! Care to leave a review?`);
}
