// 分级渲染示例

var featureLayer = new esri.layers.FeatureLayer("http://localhost:6080/arcgis/rest/services/JsTileMap/MapServer/9 ", {
    mode: esri.layers.FeatureLayer.MODE_ONDEMAND, outFields: ["*"]
});
var fillsymbol = new esri.symbol.SimpleFillSymbol(
    esri.symbol.SimpleFillSymbol.STYLE_SOLID,
    new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_DASHDOT,
        new dojo.Color([255, 0, 0]), 2), new dojo.Color([255, 255, 0, 0.25]));
var renderer = new esri.renderer.ClassBreaksRenderer(fillsymbol, "OBJECTID");
renderer.addBreak(1, 3, new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([56, 168, 0, 0.5])));
renderer.addBreak(4, 8, new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([139, 209, 0, 0.5])));
renderer.addBreak(9, 14, new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 255, 0, 0.5])));
renderer.addBreak(15, 20, new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 128, 0, 0.5])));
renderer.addBreak(20, 34, new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 0, 0, 0.5])));
featureLayer.setRenderer(renderer); Map.addLayer(featureLayer);

