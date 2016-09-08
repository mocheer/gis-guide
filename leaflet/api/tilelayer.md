#   L.TileLayer
    用来在地图上载入和显示切片图层，用ILayer接口实现。
##  Constructor（函数构造器）
    L.TileLayer()：通过给定URL模板和具有选项的对象来实例化一个切片图层。
    URL template（URL模板）
    见下面的例子
    L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'})
##  Options（选项）
    minZoom：最小级别数
    maxZoom：最大级别数
    tileSize：切片尺寸（宽度和高度的像素值，假设切片是正方形的）
    subdomains：服务的子域。可以传递一个字符串（其中每一个字母都是一个子域名称）或是一个字符串数组。
    errorTileUrl：图片的URL给出加载错误的位置。
    attribution：用来进行属性控制的字符串，描述了图层数据。
    tms：如果此值为true，反转切片Y轴的编号（对于TMS服务需将此项打开）。
    continuousWorld：如果设置为true，切片的坐标系不会被世界范围的宽度（-180度到180度）所覆盖，也不会被在世界范围的高度（-90度到90度）之内。你可以将此用在不反应真是世界的地图上（比如游戏、室内或照片的地图）。
    noWrap：如果设置此项为true，则切片不会用重复填充来表示世界范围（经度-180到180之间）之外的地方。
    zoomOffset：用此值来补偿URL中地图的缩放级别。
    zoomReverse：如果此项为true，URL中的缩放级别会被反转（用最大到最小缩放级别来替代缩放级别）。
    opacity：切片图层的透明度。
    zIndex：切片图层明确的叠置顺序，默认此项不会被设置。
    unloadInvisibleTiles：如果此项为true，在平移后所有看不到的切片都会被移除（用以更好地显示），在移动设备的webkit中默认是true，其他的默认为false。
    updateWhenIdle：如果此项为false，在平移过程中新的切片将会载入，其他的在其后载入（用以更好地显示），在移动设备webKit中默认是true，其他默认false。
    detectRetina：如果此项为true，并且用户是视网膜显示模式，会请求规定大小一般的四个切片和一个地区内一个更大的缩放级别来利用高分辨率。
    reuseTiles：如果此项为true，在平移后不可见的切片被放入一个队列中，在新的切片开始可见时他们会被取回（而不是动态地创建一个新的）。这理论上可以降低内存使用率并可以去除在需要新的切片时预留内存。
##  Events（事件）
    loading：当切片图层开始加载切片时触发。
    load：当切片图层加载完可见切片后触发。
    tileload：在加载切片时触发。
    tileunload：在切片被移除时触发（比如打开了unloadInvisibleTiles）。
##  Methods（方法）
    addTo()：将图层加到地图上。
    bringToFront()：将此切片图层放到所有切片图层之上。
    bringToBack()：将此切片图层放到所有切片图层之下。
    setOpacity()：改变切片图层的透明度。
    setZIndex()：设置切片图层的叠放顺序。
    redraw()：清除所有的切片并重新向服务端申请他们。
    setUrl()：更新图层的URL模板并重绘他们。