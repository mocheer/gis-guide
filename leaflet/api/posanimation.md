#   L.PosAnimation
    在内部用来平移动画镜头，利用CSS3转换在现代浏览器中实现，在IE6到9中用时间降速的功能实现。
##  Constructor（函数构造器）
    L.PosAnimation()：创建动画对象。
##  Methods（方法）
    run()：在新的位置运行指定元素，可以选择性地设置持续的秒数（默认是0.25秒）和线性效果（通过cubic bezier curve的第三个参数，默认是0.5）。
    Events（事件）
    start：当动画开始时触发。
    step：在动画过程中持续触发。
    end：动画结束时触发。