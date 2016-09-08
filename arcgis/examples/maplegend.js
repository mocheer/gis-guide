//图例示例 
function Maplegend() {
    var legendPar = {
        map: Map,
        arrangment: esri.dijit.Legend.ALIGN_RIGHT,
        autoUpdate: true
    };
    var legendDijit = new esri.dijit.Legend(legendPar, "legendDiv");
    legendDijit.startup();
}