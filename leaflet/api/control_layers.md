#   L.Control.Layers
    图层控制使用户可以在不同的底图之间切换，并可以控制覆盖物的开关。继承自Control。
##  Constructor（函数构造器）
    L.Control.Layers()：通过给定的图层创建数据控制。基础图层通过单选项进行切换，覆盖物通过复选框切换显示。
##  Methods（方法）
    addBaseLayer()：通过给定的控制名称添加基础层（通过单选按钮实体）。
    addOverlay()：凸显给定的控制名称添加覆盖物（通过复选框实体）。
    removeLayer()：将图层从控制中移除。
    Options（选项）
    position：控制的位置（在地图的某一角）。参见control positions。
    collapsed：如果为true，控制可以收缩为一个图标，在鼠标置于上方或点触时展开。
    autoZIndex：如果为true，控制的图层升序地叠置对齐，在切换图层打开或关闭时，顺便不变。
##  Events（事件）
    baselayerchange：当基层层通过控制更改时触发。