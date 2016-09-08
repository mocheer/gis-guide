    // 简单符号渲染示例
    var featureLayer = new esri.layers.FeatureLayer("http://localhost:6080/arcgis/rest/services/JsMap/MapServer/5", {
        mode: esri.layers.FeatureLayer.MODE_ONDEMAND, outFields: ["*"]
    });
    SimpleSymbol = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CROSS, 12,
        new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 0, 0]), 2),
        new dojo.Color([0, 255, 0, 0.25]));
    var renderer = new esri.renderer.SimpleRenderer(SimpleSymbol);
    featureLayer.setRenderer(renderer);
    Map.addLayer(featureLayer);