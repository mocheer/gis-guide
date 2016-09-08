#   L.FeatureGroup
    是LayerGroup的扩展，但多了鼠标事件和共享的弹出框方法。继承自ILayer接口。
##  Constructor（函数构造器）
    L.FeatureGroup()：创建一个图组，视情况指定一组初始图层。
##  Methods（方法）
    具有LayerGroup所以的方法，还有下面多出的方法：
    bindPopup()：在组中任意具有bindPopup方法的图层上绑定一个具有具体HTML内容的弹出框。
    getBounds()：返回要素组的经纬度边界（通过他子图层的边界和坐标获得）。
    setStyle()：设置组中具有setStyle方法的图层的路径选项。
    bringToFront()：将图组置于顶层。
    bringToBack()：将图组置于底层。
##  Events（事件）
    click：用户点击或触摸组是触发。
    dbclick：用户双击或连续两次触摸组时触发。
    mouseover：当鼠标置于组上方时触发。
    mouseout：当鼠标离开组时触发。
    mousemove：当鼠标经过组时触发。
    contextmenu：当用户右击图层时触发。
    layeradd：当图层被加入到组时触发。
    layerremove：当图层从组中移除时触发。