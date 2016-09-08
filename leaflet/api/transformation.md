#   L.Transformation
    表示仿射变换：用一系列a、b、c、d的系数来将（x，y）形式转换为（ax+b，cy+d）的形式并进行反转。在leaflet的投影代码中可以用得到。
##  Constructor（函数构造器）
    L.Transformation()：通过给定的系数创建转换对象。
##  Methods（方法）
    transform()：返回转换后的点，可以选择扩大一定的倍数。只接受真实的L.Point实例，而不是数组。
    untransform()：返回反转变换后的点，可以选择搜索一定倍数。只接受真实的L.Point实例，而不是数组。