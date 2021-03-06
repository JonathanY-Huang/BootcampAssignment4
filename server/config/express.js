var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');

require('../routes/listings.server.routes');
const options = {useMongoClient: true}
module.exports.init = function() {
  //connect to database
  mongoose.Promise = global.Promise;
  mongoose.connect(config.db.uri, options);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /**TODO
  Serve static files */
  app.use('/', express.static('client'));  

  /**TODO 
  Use the listings router for requests to the api */
  app.use('/api/listings', listingsRouter);

  /**TODO 
  Go to homepage for all routes not specified */ 
  app.all('/*', function(req, res) {
    res.sendfile(path.resolve('client/index.html'));
  });

  return app;
};  
