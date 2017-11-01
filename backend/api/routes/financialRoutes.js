'use strict';
module.exports = function(app) {
  var financeList = require('../controllers/financialController');

  // todoList Routes
  app.route('/items')
    .get(financeList.listAllItems)
    .post(financeList.createAnItem);


  app.route('/items/:itemId')
    .get(financeList.readAnItem)
    .put(financeList.updateAnItem)
    .delete(financeList.deleteAnItem);
};