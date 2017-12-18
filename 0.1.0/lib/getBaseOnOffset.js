export default function getBaseOnOffset (value, key, elSize, object) {
    elSize = parseInt(elSize)
    function count (value) {
        if (object === 'el') {
            return -value
        }
        else {
            return value
        }
    }
    switch(key) {
        case 'left':
        case 'top':
            value = value + 0
        break
        case 'center':
            value = value + count(elSize / 2)
        break
        case 'bottom':
        case 'right':
            value = value + count(elSize)
        break
        default:
            throw new Error('node_modules/align-position: domPos(options) options.baseOn.el and baseOn.target must be one of "left" "top" "right" "center" "bottom"')
    }
    return value
}
