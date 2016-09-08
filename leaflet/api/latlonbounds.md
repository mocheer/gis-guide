#   L.LatLngBounds
    表示地图上一个矩形的区域。
    所有接受LatLngBounds对象的leaflet方法也接受他们简单数组的形式（除非另行说明）。
##  Constructor（函数构造器）
    L.LatLngBounds(西南角点,东北角点)：通过定义矩形西南角点和东北角点来创建经纬度的矩形框。
    L.LatLngBounds()：通过定义内在点来创建经纬度的矩形框。当用fitBounds把地图放到适合某些位置的缩放级别时是比较有用的。
##  Methods（方法）
    extend()：将边界延伸到包含给定点和边界的范围。
    geSouthWest()：返回边界的西南角点。
    getNorthEast()：返回边界的东北角点。
    getNorthWest()：返回边界的西北角点。
    getSouthEast()：返回边界的东南角点。
    getWest()：返回边界的西点。
    getSouth()：返回边界的南角点。
    getEast()：返回边界的东角点。
    getNorth()：返回边界的北角点。
    getCenter()：返回边界的中心点。
    containg(otherBounds)：如果矩形框包含给定的边界则返回true。
    contains(latlng)：如果矩形框包含给定的点则返回true。
    intersects()：如果矩形框与给定的边界相交则返回true。
    equals()：如果矩形框与给定的范围相等（在一定容差范围内）则返回true。
    toBBoxString()：返回“西南经度，西南纬度，东北经度，东北纬度”形式的外接矩形的坐标。在向网络服务器提交请求返回地理数据时比较有用。
    pad()：返回当前范围扩大一定百分比后的边界。
    isValid()：如果边界可被初始化则返回true。