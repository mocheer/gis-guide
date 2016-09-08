//鹰眼图示例 
function OverviewMap() {
    var over =
        {
            map: Map,
            attachTo: "bottom-right",
            color: "#D84E13",
            expandFactor: 2,
            baseLayer: new esri.layers.ArcGISTiledMapServiceLayer(MapServer)
        };

    var MapViewer = new esri.dijit.OverviewMap(over, dojo.byId("OverViewDiv"));
    MapViewer.startup();

}
