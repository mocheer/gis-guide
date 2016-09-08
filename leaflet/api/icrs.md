#   ICRS
    为将地理点投影到像素坐标或屏幕坐标和反向投影（投影到用于WMS服务的其他单位的坐标）而定义坐标参考系统。参加Spatial reference system。
##  Methods（方法）
    latLngToPoint()：将给定缩放级别的地理坐标投影为像素坐标。
    pointToLatLng()：是latLngToPoint的反转。将给定缩放级别的像素坐标投影为地理坐标。
    project()：将地理坐标投影为CRS可接受单位的坐标（比如EPSG:3857中的米，传递给WMS服务）。
    scale()：返回转换投影坐标为特定级别的像素坐标所用到的缩放级别。比如，在基于墨卡托投影的CRS中返回256*2^zoom。
    Properties（属性）
    projection：CRS使用的投影。
    transformation：CRS使用的用来将投影坐标转换为特定切片服务的屏幕坐标的转换方式。
    code：向WMS服务传递的标准CRS的标准代码名称（比如'EPSG:3857'）。
##  Defined CRS（定义的坐标参考系统）
    L.CRS.EPSG3857：在线地图最常用的CRS，几乎所有的免费喝商业切片服务都会使用。使用球面墨卡托投影。是地图的crs选项的开始默认值。
    L.CRS.EPSG4326：在GIS专家中常见的CRS。使用简单的圆柱投影。
    L.CRS.EPSG3395：较少地被商业切片服务使用。使用椭圆墨卡托投影。
    L.CR.Simple：直接将经纬和纬度映射为x和y的简单的CRS。可能会在平面地图中用到（比如游戏地图）。y轴始终是反向的（由下而上）。
    如果你想用其他此处未列出的不常用的CRS，请查询Proj4Leaflet插件。
##  Global Switches
    用来在少数情况并且基本都是即使某个特别的浏览器要素存在，也使leaflet不监测的全局设置开关。需要在leaflet包含于页面之前将全局变量开关设置为true。
    L_PREFER_CANVAS：对于矢量图层，强制leaflet在后台使用画布而非SVG。这在某些情况下可以适当提高性能（比如在地图上有成千上万的圆注记时）。
    L_NO_TOUCH：即使监测到触摸事件，也强制leaflet不去使用触摸事件。
    L_DISABLE_3D：即使可用，也强制leaflet在定位时不使用硬件加速来进行CSS 3D变换（在少数情况下会发生偶然故障）。
##  L.noConflict()
    这个方法用来将L全局变量恢复到leaflet包含的初始值，并返回leaflet真实的命名空间，所以你可以将它放到任何地方。
##  L.version
    显示当前使用的leaflet版本的常量。