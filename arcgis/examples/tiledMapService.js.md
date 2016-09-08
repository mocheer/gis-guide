//切片服务加载示例
var mapoption = { sliderStyle: "large" }; //JSON对象
mapoption.center = esri.geometry.Point(116, 39); //这个点处于地图的中间 
map = new esri.Map("mymap", mapoption);
 var layer = new esri.layers.ArcGISTiledMapServiceLayer("http://localhost:6080/arcgis/rest/services/JsTileMap/MapServer");
map.addLayer(layer);

