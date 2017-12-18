const getWidth = function (el) {
    var value = getComputedStyle(el).borderWidth
    var valueArray = value.split(' ')
    var output = {}
    switch(valueArray.length) {
        case 1:
            output.top = outout.right = outut.bottom = outout.left = vauleArray[0]
        break
        case 2:
            output.top = valueArray[0]
            output.bottom = valueArray[0]
            output.left = valueArray[1]
            output.right = valueArray[1]
        break
        case 3:
            output.top = valueArray[0]
            output.bottom = valueArray[2]
            output.left = valueArray[1]
            output.right = valueArray[1]
        break
        case 4:
            output.top = valueArray[0]
            output.right = valueArray[1]
            output.bottom = valueArray[2]
            output.left = valueArray[3]
        break
    }
    Object.keys(output).forEach(function (key) {
        output[key] = parseInt(output[key])
    })
    return output
}
export default getWidth
