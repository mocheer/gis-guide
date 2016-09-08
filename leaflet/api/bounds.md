#   L.Bounds
    用像素坐标表示的矩形的区域。
    所以接受边界对象的leaflet方法和选项都也接受他们简单数组的形式。
##  Constructor（函数构造器）
    L.Bounds(左上角点，右下角点)：用两个坐标（通常是左上角的点和右下角的点）来创建边界对象。
    L.Bounds(点集)：用包含的点创建边界对象。
    Properties（属性）
    min：矩形左上角点。
    max：矩形右下角点。
##  Methods（方法）
    extend()：将包含给定点的边界延伸。
    getCenter()：返回边界的中心点。
    contains()：如果矩形包含给定的边界则返回true。
    contains()：如果矩形包含给定点则返回true。
    intersects()：如果矩形与给定边界相交则返回true。
    isValid()：如果边界可以被初始化则返回true。
    getSize()：返回边界的大小。