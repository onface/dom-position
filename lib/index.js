import getPosParent from "./getPositionParent"
import getBorderWidth from "./getBorderWidth"
import defaultProps from "./defaultProps"
import getBaseOnOffset from "./getBaseOnOffset"
import extend from "extend"
const replaceDefaultBaseOn = function (data) {
    if (data.length === 1) {
        if (data[0] === 'center') {
            data[1] = 'center'
        }
        else {
            data[1] = 'top'
        }
    }
}
const domPos = function (options) {
    options = extend(true, defaultProps(), options)
    // format options
    options.baseOn.el = options.baseOn.el.split(' ')
    replaceDefaultBaseOn(options.baseOn.el)
    options.baseOn.target = options.baseOn.target.split(' ')
    replaceDefaultBaseOn(options.baseOn.target)

    var offsetParentEl = getPosParent(options.el)

    // count offset
    var positionLeft = options.target.getBoundingClientRect().left - offsetParentEl.getBoundingClientRect().left - getBorderWidth(offsetParentEl).left
    var positionTop = options.target.getBoundingClientRect().top - offsetParentEl.getBoundingClientRect().top - getBorderWidth(offsetParentEl).top
    positionTop = positionTop + offsetParentEl.scrollTop
    positionLeft = positionLeft + offsetParentEl.scrollLeft
    // set baseOn Offse
    positionLeft = getBaseOnOffset(
        positionLeft,
        options.baseOn.el[0],
        options.el.clientWidth + getBorderWidth(options.el).left + getBorderWidth(options.el).right, 'el'
    )
    positionTop = getBaseOnOffset(
        positionTop,
        options.baseOn.el[1],
        options.el.clientHeight  + getBorderWidth(options.el).top + getBorderWidth(options.el).bottom, 'el'
    )

    positionLeft = getBaseOnOffset(
        positionLeft,
        options.baseOn.target[0],
        options.target.clientWidth + getBorderWidth(options.target).left + getBorderWidth(options.target).right
    )
    positionTop = getBaseOnOffset(
        positionTop,
        options.baseOn.target[1],
        options.target.clientHeight + getBorderWidth(options.target).top + getBorderWidth(options.target).bottom
    )
    // set style
    var position = {
        left: positionLeft,
        top: positionTop
    }
    position = options.onAlign(position, options.el, options.target, offsetParentEl)
    if (typeof position === 'undefined') {
        throw new Error('node_modules/dom-position: domPos(options) options.onAlign must be return `{left: Number, top: Number}`')
    }
    options.el.style.position = 'absolute'
    var stylePositionLeftValue
    var stylePositionTopValue
    if (options.useCssTransform) {
        stylePositionLeftValue = '0px'
        stylePositionTopValue = '0px'
        options.el.style.transform = `translateX(${position.left}px) translateY(${position.top}px) translateZ(0)`
    }
    else {
        stylePositionLeftValue = position.left + 'px'
        stylePositionTopValue = position.top + 'px'
    }
    options.el.style.left = stylePositionLeftValue
    options.el.style.top = stylePositionTopValue

}
module.exports = domPos
