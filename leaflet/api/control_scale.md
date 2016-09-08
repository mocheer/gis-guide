#   L.Control.Scale
    显示在十进制或公制的屏幕当前中心的比例的简单比例尺控制。继承自IControl接口。
##  Constructor（函数构造器）
    L.Control.Scale()：通过选项创建比例控制。
##  Options（选项）
    position：控制的位置（在地图的某一角）。参见control positions。
    maxWidth：控制最大的像素宽度。宽度可以围绕几个值动态设置。
    metric：是否显示十进制比例线。
    imperial：是否显示公制比例线。
    updateWhenIdle：如果设置为true，控制由moveend更新，否则它总是最新的（由move更新）。