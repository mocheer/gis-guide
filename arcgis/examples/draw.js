// 绘图示例
function ondraw() {
    var toolbar = new esri.toolbars.Draw(Map, { showTooltips: true });
    toolbar.activate(esri.toolbars.Draw.POLYLINE);
    dojo.connect(toolbar, "onDrawEnd", function (geometry) {
        var graphic = new esri.Graphic(geometry, PolyLineSymbol);
        Map.graphics.add(graphic);
        toolbar.deactivate();
    });
}

