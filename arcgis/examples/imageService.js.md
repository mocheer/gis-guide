    //影像服务加载示例
    var params = new esri.layers.ImageServiceParameters();
    params.noData = 0;
    var rasterFunction = new esri.layers.RasterFunction();
    rasterFunction.functionName = "Hillshade";
    rasterFunction.arguments = {
        "Azimuth": 215.0,
        "Altitude": 75.0,
        "ZFactor": 0.3
    };
    rasterFunction.variableName = "DEM";
    params.renderingRule = rasterFunction;
    osmLayer = new esri.layers.ArcGISImageServiceLayer("http://localhost:6080/arcgis/rest/services/image/ImageServer", params); map.addLayer(osmLayer); 