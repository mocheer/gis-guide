#  L.Control.Attribution
    可以在地图上一个小的文本盒子中显示属性数据的属性控制。默认地图上是有的，除非设置attributionControl选项为false，并且它自动地通过getAttribution方法获取图层的属性文本。继承自Control。
##  Constructor（函数构造器）
    L.Control.Attribution()：创建属性控制。
##  Options（选项）
    position：控制的位置（在地图的某一角）。参见control positions。
    prefix：在属性之前显示的HTML文本。传递false来使其不显示。
    Methods（方法）
    setPrefix()：在属性之前设置文本。
    addAttribution()：添加属性文本。
    removeAttribution()：移除属性文本。