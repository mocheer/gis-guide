// 唯一值渲染示例

var featureLayer = new esri.layers.FeatureLayer("http://localhost:6080/arcgis/rest/services/JsMap/MapServer/9", {
    mode: esri.layers.FeatureLayer.MODE_ONDEMAND,
    outFields: ["*"]
});
var fillsymbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
    new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_DASHDOT,
        new dojo.Color([255, 0, 0]), 2), new dojo.Color([255, 255, 0, 0.25]));

var renderer = new esri.renderer.UniqueValueRenderer(fillsymbol, "NAME");
renderer.addValue("黑龙江", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 0, 0, 0.5])));
renderer.addValue("陕西", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([0, 255, 0, 0.5])));
renderer.addValue("安徽", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([0, 0, 255, 0.5])));
renderer.addValue("广东", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 0, 255, 0.5])));
renderer.addValue("河北", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 255, 255, 0.75]))); featureLayer.setRenderer(renderer);
Map.addLayer(featureLayer);

