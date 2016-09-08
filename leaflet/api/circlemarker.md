#   L.CircleMarker
    是一个特定半径的圆，半径单位是像素。是Circle的延伸。通过Map#addLayer添加到地图上。
##  Constructor（函数构造器）
    L.CircleMarker()：通过给定的地理点和选项对象来实例化一个圆注记。默认的半径是10像素，并且可以通过在路径选项中传递一个半径参数来修改半径。
##  Methods（方法）
    setLatLng()：将圆注记放置于一个新的位置。
    setRadius()：设置圆注记的半径，以像素为单位。