#   L.GeoJSON
展示一个GeoJSON的图层。允许你在地图上解析并显示GeoJSON数据。是FeatureGroup的延伸。
由此创建的每个要素层获取要素与之关联的GeoJSON数据属性（因此你随后可以传递它的属性）。
##  Constructor（函数构造器）
L.GeoJSON()：创建一个GeoJSON图层。可以任意地接受GeoJSON格式的对象和选项对象并显示在地图上（随后可以选择用addData方法添加）。
##  Options（选项）
pointToLayer()：在创建GeoJSON点图层时所用到的函数（如果不特意说明，会创建简单的注记）。
style()：在获取用来创建GeoJSON要素的矢量图层的样式选项时可以用到。
onEachFeature()：在每个创建的图层上都会调用此函数。对于向要素添加事件和弹出框比较有用。
filter()：用来决定是否显示某要素的函数。
##  Methods（方法）
addData()：在图层中添加GeoJSON对象。
setStyle()：通过给定的样式函数改变GeoJSON矢量图层的样式。
resetStyle()：将矢量图层样式重置为初始GeoJSON样式，对于hover事件之后的重置比较有用。
##  Static methods（静态方法）
geometryToLayer():通过给定的GeoJSON要素创建图层。
coordsToLatlng():通过在GeoJSON中表示点的两个数字组成（分别表示纬度和经度）的数组来创建经纬度对象。如果reverse设置为true，那么这两个数字被颠倒，表经度和纬度。
coordsToLatlngs():通过GeoJSON坐标坐标的数组创建多维数组。leversDeep指定具体的嵌套级别（0表示点的数组，1表示点数组的数组等等，0为默认值）。如果reverse设置为true，这些数组变为经度和纬度。