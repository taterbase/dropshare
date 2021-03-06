(function () {
  "use strict";

  var dropshare = require('./lib/index')
    , config = require('./config')
    , options = {
          "tmp": "/tmp"
        , "storageDir": __dirname + "/files"
        , "client": __dirname + "/public"
      }
    , app
    , attributeName
    ;


  // Use the options provided in the config.js file
  for (attributeName in config) {
    options[attributeName] = config[attributeName];
  }

  app = dropshare.create(options)
  module.exports = app;
}());
