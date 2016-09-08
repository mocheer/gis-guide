#   L.LayerGroup
    用来将几个图层组成一个组并作为一个图层来处理。如果你将其添加到地图上，组中任何图层的添加或移除都将使其同样在地图添加或删除。继承自ILayer接口。
##  Constructor（函数构造器）
    L.LayerGroup()：创建一个组，视情况指定一组初始的图层。
##  Methods（方法）
    addTo()：将图组添加到地图上。
    addLayer()：将给定的图层添加到组中。
    removeLayer()：将给定的图层从组中移除：
    clearLayer()：将组中的图层清空。
    eachLayer()：遍历组中的图层，需选择一个符合情况的迭代函数。