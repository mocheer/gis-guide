#   ILayer
    显示地图上附属于某一位置（或一系列位置）的对象。被tile layers，markers，popups，image，overlays，vector layers和layer groups所继承。
##  Methods（方法）
    onAdd()：需要包含创建覆盖物的DOM元素的代码，将他们加入到所属的map panes中并在相关地图时间中放入监听器。调用map.addLayer(map)。
    onRemove()：包含从DOM移除覆盖物元素和移除之前onAdd方法添加的监听器的所有的清除代码。调用map.removeLayer(layer)。
##  Implementing Custom Layers（实例化自定义图层）
    何时实例化自定义图层最重要的是地图的viewset事件和latLngToLayerPoint方法。viewset在地图需要重新定位图层时（比如缩放时）触发，latLngToLayerPoint在获取图层新的位置时使用。
    在实例化图层时还有一个经常用到的事件是moveend，在地图移动之后触发（比如平移和缩放等）。
    还 有一个需要注意的事情是你需要经常向你在图层中创建的DOM元素中添加leaflet-zoom-hide类，它会在缩放动画中隐藏。实例化自定义图层的 缩放动画师一个复杂的话题，在以后的章节中会讲到，但你可以在leaflet的图层代码（比如ImageOverlay）中看一下它是如何工作的。