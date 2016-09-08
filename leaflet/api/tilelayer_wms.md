#   L.TileLayer.WMS
    用来显示地图上切片图层的WMS服务，继承自TileLayer。
##  Constructor（函数构造器）
    L.TileLayer.WMS()： 通过给定一个基本的WMS服务的URL和WMS参数或选项对象来实例化一个WMS切片图层对象。
##  Options（选项）
    layers：WMS图层以逗号分隔符隔开的列表。
    styles：WMS样式以逗号分隔符隔开的列表。
    format：WMS图像格式（用“image/png”来显示透明图层）。
    transparent：如果该项为true，WMS服务返回透明图片。
    version：WMS服务的版本。
    Methods（方法）
    setParams()：融合新的参数和在当前屏幕中重申请的切片（除非noRedraw设置为true）。