// GraphicsLayer示例
// 该示例通过Draw工具绘刢几何对象，并在GraphicsLayer上进行显示来说明GraphicsLayer的用法
//激活绘制工具 
function DrawPolygonGraphic() {
    ToolBar.activate(esri.toolbars.Draw.POLYGON);
}
function DrawPolylineGraphic() {
    ToolBar.activate(esri.toolbars.Draw.POLYLINE);
}
function DrawPointGraphic() {
    ToolBar.activate(esri.toolbars.Draw.POINT);
}

//绘制面
//初始化并绘制几何对象 
function Init() {
    font = new esri.symbol.Font();
    font.setSize("10pt");
    font.setFamily("微软雅黑");
    wkid = 4326;
    IsGraphicQuery = false;
    var startExtent = new esri.geometry.Extent({
        "xmin": 70.374747,
        "ymin": 0.903097, "xmax": 138.053125, "ymax": 56.038121,
        "spatialReference": { "wkid": wkid }
    });
    Map = new esri.Map("map", { extent: startExtent });
    MapServer ="http://localhost:6080/arcgis/rest/services/JsTileMap/MapServer";
    var layer = new esri.layers.ArcGISTiledMapServiceLayer(MapServer);

    Map.addLayer(layer);

    GraphicDrawLayer = new esri.layers.GraphicsLayer(); //创建图层 
    Map.addLayer(GraphicDrawLayer);
    ToolBar = new esri.toolbars.Draw(Map);//使用toolbar上的绘图工具 

    //点符号 
    PointSymbol = new esri.symbol.SimpleMarkerSymbol();
    PointSymbol.style = esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE;
    PointSymbol.setSize(12);
    PointSymbol.setColor(new dojo.Color("#FFFFCC"));

    //线符号 
    PolyLineSymbol = new
        esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_DASH, new
            dojo.Color([255, 0, 0]), 3);

    //面符号 
    PolygonSymbol = new esri.symbol.SimpleFillSymbol(
        esri.symbol.SimpleFillSymbol.STYLE_SOLID,
        new esri.symbol.SimpleLineSymbol(
            esri.symbol.SimpleLineSymbol.STYLE_DASHDOT,
            new dojo.Color([255, 0, 0]), 1),
        new dojo.Color([255, 255, 0, 0.25])
    );

    dojo.connect(Map, 'onLoad', function (theMap) {
        dojo.connect(ToolBar, "onDrawEnd", function (geometry) {
            if (geometry.type === "polygon") {
                ToolBar.deactivate();
                var graphicPolygon = new esri.Graphic(geometry, PolygonSymbol);
                Map.graphics.add(graphicPolygon);
            }
            if (geometry.type === "point") {
                ToolBar.deactivate();
                var graphicpoint = new esri.Graphic(geometry, PointSymbol);
                Map.graphics.add(graphicpoint);//用默认的图层添加 

            }
            if (geometry.type === "polyline") {
                ToolBar.deactivate();
                var graphicpolyline = new esri.Graphic(geometry,
                    PolyLineSymbol);
                //Map.graphics.add(graphicpolyline); 
                GraphicDrawLayer.add(graphicpolyline);//使用自己创建的图层添加符号
            }
        });
        dojo.connect(dijit.byId('map'), 'resize', MapResize);
    });
}





