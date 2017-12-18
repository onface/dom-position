var ReactDOM = require('react-dom')
var render = ReactDOM.render

// basic
;(function (node) {
    if (!node) {return}
    require(['./basic.demo.js'])
})(document.getElementById('example__basic'))
