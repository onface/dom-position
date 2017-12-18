var path = require('path')
var express = require('express')
var open = require("open")
var iPackage = require('../package.json')
var hashToPort = require('hash-to-port')
var serverPort = hashToPort(iPackage.name + 'onface/react:static-server')
var userConfig = require('../dev-config.js')
var app = express();
require('./express-parser')(app)
app.use(express.static(__dirname + '/../output'))
app.use(require('./connect-redirect.js'))
userConfig.mockServer(app)
console.log(__dirname + '/../output')
app.listen(serverPort, function(err) {
  if (err) {
    return console.error(err);
  }
  var url = 'http://localhost:' + serverPort
  open(url)
  console.log('Static server listening at ' + url);
})
