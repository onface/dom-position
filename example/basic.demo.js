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
    options.useCssTransform = true
    options.onAlign = function onAlign (position, el) {
        console.log(position)
        // position.left = position.left + 10
        return position
    }
    domPos(options)
})

var box = document.createElement('div')
box.style.width = '20px'
box.style.height = '20px'
box.style.backgroundColor = 'orange'
document.body.appendChild(box)

console.log(box)
domPos({
    el: box,
    target: document.getElementById('wrap1')
})
