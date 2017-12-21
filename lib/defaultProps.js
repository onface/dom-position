export default function () {
    return {
        baseOn: {
            // "left/center/right top/center/bottom"
            el: 'left top',
            // "left/center/right top/center/bottom"
            target: 'left top'
        },
        onAlign: function (position, el, target, offsetParent) {
            // position.left = position.left + 10
            return position
        },
        useCssTransform: false,
    }
}
