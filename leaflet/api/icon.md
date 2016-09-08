#   L.Icon
    创建注记时显示的图标。
##  Constructor（函数构造器）
    L.Icon()：通过给定的选项创建图标实例。
##  Options（选项）
    iconUrl：请求图标图片的URL（脚本中的绝对或相对路径）。
    iconRetinaUrl：图标图片视网膜视图下的尺寸的URL。用于视网膜屏幕的设备。
    iconSize：图标图片的像素大小。
    iconAnchor：图标提示的坐标（在左上角）。图标是对其的，所以这个点是注记的地理位置。如果大小是指定的则位于中心处，也可以在CSS中设置负边界。
    shadowUrl：图标阴影图的URL。如果没有指定，图标没有阴影。
    shadowRetinaUrl：图标在视网膜视图下的尺寸的URL。如果没有指定，图标没有阴影。用于视网膜屏幕的设备。
    shadowAnchor：阴影的提示坐标（在左上角）（如果没有指定则与iconAnchor相同）。
    popupAnchor：与图标锚相关的打开弹出框的点的坐标。
    className：图标和阴影图片的自定义的类名。默认为空。