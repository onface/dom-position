var domPos = require('dom-position')
domPos({
    el: document.getElementById('el1'),
    target: document.getElementById('target1')
})

document.getElementById('set').addEventListener('submit', function (e) {
    e.preventDefault()
    var json = document.getElementById('options').value
    var options = JSON.parse(json)
    options.el = document.getElementById('el1')
    options.target = document.getElementById('target1')
    domPos(options)
})
