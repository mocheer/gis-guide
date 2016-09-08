#   L.DivIcon
    用div要素而非图片来轻量级地显示注记的图标。
    默认情况下，阴影会有一个小的白色的方形作为leaflet-div-icon类和样式。
##  Constructor（函数构造器）
    L.DivIcon()：用给定的选项实例化图标。
##  Options（选项）
    iconSize：图标的像素大小。也可以通过CSS设置。
    iconAnchor：图标提示的坐标（在左上角）。图标是对其的，所以这个点是注记的地理位置。如果大小是指定的则位于中心处，也可以在CSS中设置负边界。
    className：用于对其图标的自定义的类名，默认为leaflet-div-icon。
    html：在div要素中自定义的HTML代码，默认为空。