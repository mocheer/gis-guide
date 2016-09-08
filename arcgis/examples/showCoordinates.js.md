    // 显示地图坐标示例
    function showCoordinates(evt) {
        var mp = evt.mapPoint;
        var screenPt = Map.toScreen(mp);
        var str = "<p style=\"display:block\">" + "屏幕坐标(x,y):" + "(" + screenPt.x + "," + screenPt.y + ")" + "</p>";
        dojo.byId("DivBottom").innerHTML = str + "地图坐标(x,y):" + "(" + mp.x + ", " + mp.y + ")";
    }

