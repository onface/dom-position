var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var cors = require('cors')
module.exports = function (app) {
    app.use(cors())
    .use(bodyParser.urlencoded({extended: false, limit: '10240000kb'}))
    .use(bodyParser.json())
    .use(cookieParser())
}
