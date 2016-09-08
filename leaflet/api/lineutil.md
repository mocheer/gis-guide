#   L.LineUtil
    一些处理线段点的应用函数，在leaflet内部用来使线段显示更快。
##  Methods（方法）
    simplify()： 在保持形状的同时动态地减少线上点的数目并返回简化后点的数组。在每一缩放级别处理和显示leaflet线段时可以大幅提升效率并可以减少视觉噪声。 tolerance影像简化的量（较小的值意味着更高的质量，但效率会地因为有更多的点）。这也是微型类库Simplify.js中的一部分。
    pointToSegmentDistance()：返回点p到p1和p2组成的线段之间的距离。
    closesPointOnSegment()：返回p1和p2线段上与p点最接近的点。
    clipSegment()：用矩形边界裁剪点a到点b之间的折线段（直接修改折线段上的点）。在leaflet中用来显示屏幕内或边缘的线段上的点，可以因此而提高效率。