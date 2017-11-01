var express = require('express'),
app = express(),
port = 3000,

mongoose = require('mongoose'),
Task = require('./api/models/financialModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/finance'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/financialRoutes');
routes(app); 

app.listen(port);

console.log('financial list RESTful API server started on: ' + port);