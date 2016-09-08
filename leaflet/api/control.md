#   L.Control
    所有leaflet控制的基础类。继承自IControl接口。
##  Constructor（函数构造器）
    L.Control()：通过给定的选项创建一个控制。
##  Options（选项）
    position：控制初始的位置（在地图的某一角）。参见control positions。
    Methods（方法）
    setPosition()：设置控制的位置。参见control positions。
    getPosition0()：返回控制的当前位置。
    addTo()：将控制添加到地图上。
    removeFrom()：将控制从地图上移除。
    Control Positions（控制的位置）
    topleft：地图的左上角。
    topright：地图的右上角。
    bottomleft：地图的左下角。
    bottomright：地图的右下角。
