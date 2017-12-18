const getBorderWidth = function (el) {
    // Do't use `getComputedStyle(el).borderWidth`  http://tieba.baidu.com/p/2222283768?traceid=
    var style = getComputedStyle(el)
    var output = {
        left: style.borderLeftWidth,
        right: style.borderRightWidth,
        top: style.borderTopWidth,
        bottom: style.borderBottomWidth
    }

    Object.keys(output).forEach(function (key) {
        output[key] = parseInt(output[key])
        if (isNaN(output[key])) {
            output[key] = 0
        }
    })
    return output
}
export default getBorderWidth
