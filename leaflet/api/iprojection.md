#   L.IProjection
    具有将地理坐标投影到平面（和后方）的方法的对象。参加Map projection。
##  Methods（方法）
    project()：将地理坐标投影为二维点。
    unproject()：将二维的点反投影为地理位置。
##  Defined Projections（定义的投影）
    L.Projection.SphericalMercator：球面墨卡托投影——网上地图最常用的投影，几乎所有的免费和商业的切片提供者都会使用。假设地球是一个规则球体。被EPSG:3857坐标参考系统使用。
    L.Projection.Mercator：椭圆墨卡托投影——比球面墨卡托投影更为复杂，这个投影考虑到地球是椭球而非规则球体。在EPSG:3395坐标参考系统中使用。
    L.Projection.LonLat：正交矩形或圆柱投影——最简单的投影，几乎只被GIS专家使用。将地图的x方向作为经度，y方向作为纬度。对于平面的世界也适用，比如游戏地图。在EPSG:3395和Simple坐标参考系统中使用。