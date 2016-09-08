#   L.LatLng
    表示通过某一经度和纬度确定的地理上的点。
    所以leaflet接受的经纬度对象也接受他们的单一数组的形式（除非在其他方面表明不可以）。
##  Constructor（函数构造器）
    L.LatLng()：通过给定的纬度和经度创建表示地理点的对象。
    Options（选项）
    lat：以度数表示的纬度。
    lng：以度数表示的经度。
##  Methods（方法）
    distanceTo()：返回到通过半正矢公式计算的经纬度的距离（用米表示）。
    equals()：如果给定的经纬度在相同的位置（具有较小的容差）则返回true。
    toString()：返回点的描述信息（用来调试用）。
    wrap()：返回在经度上left和right边界覆盖范围内（默认为0180到180）的心的经纬度对象。
##  Constants（常量）
    DEG_TO_RAD:度数转换为弧度的乘子。
    RAD_TO_DEG:弧度转换为度数的乘子。
    MAX_MARGIN:判断相等的容差。