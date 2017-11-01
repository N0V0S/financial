'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FinancialSchema = new Schema({
  Name: {
    type: String,
    required: 'The Name'
  },
  Amount: {
    type: Number,
    default: 0
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Spend_date: {
    type: Date,
    default: Date.now
  },
  Category: {
    type: String,
  }
});

module.exports = mongoose.model('Finance', FinancialSchema);