//动态图层使用示例 
function AddDynamicLayer1() {
    var TableSource = new esri.layers.TableDataSource();
    TableSource.workspaceId = "liuyu";
    TableSource.dataSourceName = "province.shp";
    var layerSource = new esri.layers.LayerDataSource();
    layerSource.TableSource = TableSource;

    var featureLayer = new esri.layers.FeatureLayer("http://localhost:6080/arcgis/rest/services/JsMap/MapServer/dynamicLayer", {
        mode: esri.layers.FeatureLayer.MODE_ONDEMAND,
        source: layerSource
    });
    var renderer = new esri.renderer.SimpleRenderer(symbol);
    featureLayer.setRenderer(renderer);
    featureLayer.refresh();
    Map.addLayer(featureLayer);

}