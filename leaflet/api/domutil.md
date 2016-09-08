#   L.DomUtil
    在leaflet内部用来处理DOM树的应用函数。
##  Methods（方法）
    get()：如果传递字符串则返回一个带有指定id的元素，或是只是返回这个元素。
    getStyle()：返回元素中特定样式属性的值，包括计算后的值和CSS中设置的值。
    getViewprotOffset()：返回请求元素视图的偏移量。
    create()：通过tagName创建元素，设置className并选择性地将其附加到container元素中。
    disableTextSelection()：使文本不能被选择，比如拖动的时候。
    enableTextSelection()：使文本选择重新可用。
    hasClass()：如果元素类属性包含name则返回true。
    addClass()：将name添加到元素类的属性中。
    removeClass()：在元素类属性中移除name。
    setOpacity()：设置元素的透明度（包括老的IE也支持）。值应当处于0到1之间。
    testProp()：检索样式名称的数组并返回第一个元素可用样式的名称。如果没有找到，那么返回false。
    getTranslateString()：返回CSS转换字符串来通过给定点提供的偏移量来移动元素。
    getScaleString()：返回CSS转换字符串来缩放元素（通过给定的比例原点）。
    setPosition()：用CSS转换或屏幕左上角位置设置给定点的坐标系下的元素位置（leaflet内在地定位图层）。如果disable3D设置为true那么强制为左上角位置。
    getPosition()：返回之前用setPosition定位的元素的坐标。
##  Properties（属性）
    TRANSITION：带前缀的转换样式名称（如'webkitTransition'用来表示WebKit）。
    TRANSFORM：带前缀的变换样式名称。