//WMS 服务加载示例 
var layer = new esri.layers.WMSLayer("http://192.168.110.150:6080/arcgis/services/JsMap/MapServer/WMSServe r");
layer.setVisibleLayers([3, 4, 5]);//设置显示的图层  
layer.setImageFormat("jpg");
map.addLayer(layer);
dojo.connect(map, 'onLoad', function (theMap) {
    dojo.connect(map, 'resize', MapResize);
}); 