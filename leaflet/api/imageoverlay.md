#   L.ImageOverlay
    用来在地图上规定范围内载入和显示单幅图像，继承自ILayer。
##  Constructor（函数构造器）
    L.ImageOverlay()：通过给定图像的URL和相关的地理范围来实例化一个图像叠加层对象。
    Options（选项）
    opacity：图像叠加层的透明度。
##  Methods（方法）
    addTo()：将图像叠加层添加到地图上。
    setOpacity()：设置叠加层的透明度。
    bringToFront()：将叠加层置于所有层的顶层。
    bringToBack()：将叠加层置于所有层的底层。