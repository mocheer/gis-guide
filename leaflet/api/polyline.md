#   L.Polyline
    绘制叠加在地图上线段的类。继承自Path。用Map#addLayer来添加到地图上。
##  Constructor（函数构造器）
    L.Polyline()：通过给定的地理点组成的数组和任意的选项对象实例化一个线段。
##  Options（选项）
    smoothFactor：决定每一个缩放级别上线段简化程度。如果大的话意味着更好的表现和看起来更光滑，小的话意味更准确地表示。
    noClip：：不允许线段裁剪。
##  Methods（方法）
    addLatLng()：向线段添加一个点。
    setLatLngs()：用所给的地理点的数组替代线段上的点。
    getLatLngs()：返回路径上的点组成的数组。
    spliceLatLngs()：允许添加、移除和更改线段上的点。同Array#splice的语法一致。返回移除点组成的数组。
    getBounds()：返回线段的经纬度边界。