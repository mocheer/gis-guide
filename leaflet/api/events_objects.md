#   Event objects
    当一些事件触发时接受监听器函数参数的事件对象，它包含了事件一些有用的信息。
##  Events（事件）
    type：事件的类型。
    target：触发事件的对象。
    MouseEvent（鼠标事件）
    latlng：鼠标事件发生的地理点。
    layerPoint：鼠标事件发生的与地图图层相关的点的像素坐标。
    containerPoint：鼠标事件发生的与地图容器相关的点的像素坐标。
    originalEvent：由浏览器触发的原始的DOM鼠标事件。
    LocationEvent（位置事件）
    latlng：监测到的用户的地理位置。
    bounds：用户坐落的区域的地理边界（考虑位置精度问题）。
    accuracy：米为单位的位置的精度。
    ErrorEvent（错误事件）
    message：错误信息。
    code：错误代码（若可用）。
    LayerEvent（图层事件）
    layer：添加或移除的图层。
    TileEvent（切片事件）
    tile：切片要素（图片）。
    url：切片的url资源。
    GeoJSON event（GeoJSON事件）
    layer：将要添加到地图上的GeoJSON要素的图层。
    properties：要素的GeoJSON的属性。
    geometryType：要素的GeoJSON的几何类型。
    id：要素的GeoJSON的ID（如果出现）。
    Popup event（弹出框事件）
    popup：打开或关闭的弹出框。