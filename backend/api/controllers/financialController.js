'use strict';

var mongoose = require('mongoose'),
finance = mongoose.model('Finance');

exports.listAllItems = function(req, res) {
  finance.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.createAnItem = function(req, res) {
  var newItem = new finance(req.body);
  newItem.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.readAnItem = function(req, res) {
  finance.findById(req.params.itemId, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.updateAnItem = function(req, res) {
  finance.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.deleteAnItem = function(req, res) {
  finance.remove({
    _id: req.params.itemId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Item successfully deleted' });
  });
};