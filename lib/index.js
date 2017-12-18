import getPosParent from "./getPositionParent"
import getWidth from "./getWidth"
const domPos = function (options) {
    var offsetParentEl = getPosParent(options.el)
    var positionLeft = options.target.getBoundingClientRect().left - offsetParentEl.getBoundingClientRect().left - getWidth(offsetParentEl).left
    var positionTop = options.target.getBoundingClientRect().top - offsetParentEl.getBoundingClientRect().top - getWidth(offsetParentEl).top
    options.el.style.position = 'absolute'
    options.el.style.left = positionLeft + 'px'
    options.el.style.top = positionTop + 'px'
}
module.exports = domPos
