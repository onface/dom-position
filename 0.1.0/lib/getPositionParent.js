const getPosParent = function getPosParent (el) {
    const positionValue = getComputedStyle(el.parentNode).getPropertyValue('position')
    if (el.parentNode.nodeName.toLowerCase() === 'html') {
        return el.parentNode
    }
    if (positionValue !== 'static') {
        return el.parentNode
    }
    else {
        return getPosParent(el.parentNode)
    }
}
export default getPosParent
