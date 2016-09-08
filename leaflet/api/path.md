#   L.Path
    是包含选项和与适量叠加层共享常量的抽象类。不可以接使用。
##  Options（选项）
    stroke：路径是否描边。设置为false时，多边形和圆的边界将不可见。
    color：描边颜色。
    weight：描边的像素级别的宽度。
    opacity：描边透明度。
    fill：路径是否填充颜色。设置为false时，多边形和圆的填充内容不可见。
    fillColor：填充颜色。
    fillOpacity：填充透明度。
    dashArray：定义描边线型的字符串。这在画布上不起作用。（比如android 2）
    clickable：如果此项为false，则矢量不产生鼠标事件并表现为底图的一部分。
##  Events（事件）
    click：用户点击或点触对象时触发。
    dbclick：用户双击或连续两次点触对象时触发。
    mousedown：当用户在对象上按下鼠标时触发。
    mouseover：当鼠标置于对象上方时触发。
    mouseout：当鼠标离开对象时触发。
    contextmenu：当用户在对象上点击鼠标右键时触发，当此事件被监听时，会阻止弹出浏览器本身的右键菜单。
    add：当路径被添加在地图上时触发。
    remove：当路径在地图上移除时触发。
##  Methods（方法）
    addTo()：将图层添加到地图上。
    bindPopup()：将具有特定HTML内容的弹出框与点击路径绑定起来。
    unbindPopup()：将之前的弹出框绑定解除。
    openPopup()：打开之前通过bindPopup方法与路径上指定点或未指定情况下某一点绑定的弹出框。
    closePopup()：如果与路径绑定的弹出框是打开状态的，则将其关闭。
    setStyle()：更改给予对象选项对象的路径的表现形式。
    getBounds()：返回路径的经纬度绑定信息。
    bringToFront()：将此层移至所以路径层的最上层。
    bringToBack()：将此层移至所以路径层的最底层。
    redraw()：重绘图层。在更改了路径的坐标时比较有用。
##  Static properties（静态属性）
    SVG：如果用SVG来表达矢量，则此值为true（在当前大多数浏览器中是true）。
    VML：如果VML用来表达矢量，则此值为true（在IE 6-8中适用）。
    CANVAS：如果canvas用来表达矢量，则此值为true（在android 2中适用）。你也可以在页面中载入leaflet之前通过设置全局变量L_PREFER_CANVAS为true来强制使用此项——有时在表达上千上万相同的注记时会显著地提高性能，但目前由于漏洞导致移除图层非常慢。
    CLIP_PADDING：决定地图视图周围裁剪区域延展的大小（与大小相关，比如0.5在每个方向上是屏幕的一半）。较小的值意味着在拖动地图时你会看到被裁剪路径的末端，较大值会降低绘制性能。