    //要素图层按需显示示例 
    function Init() { 
        wkid = 4326; 

        font = new esri.symbol.Font(); 
        font.setSize("10pt"); 
        font.setFamily("微软雅黑"); 

        //定义初始范围 
        var startExtent = new esri.geometry.Extent({ "xmin": 70.274747, "ymin": 0.901097, "xmax": 139.053125, "ymax": 57.068121, "spatialReference": { "wkid": wkid } }); 
            Map = new esri.Map("map", { extent: startExtent }); 
        MapServer = "http://localhost:6080/arcgis/rest/services/JsTileMap/MapServer"; 
        var layer = new esri.layers.ArcGISTiledMapServiceLayer(MapServer); 
        Map.addLayer(layer); 

        InfoTemplate = new esri.InfoTemplate("${name}", "名称：${name}"); 
            //定义显示模式 
        var ftLayer = { mode: esri.layers.FeatureLayer.MODE_ONDEMAND, 
            infoTemplate: InfoTemplate, 
            outFields: ["*"] 
        } 
        FeatureLayer = new 
    esri.layers.FeatureLayer("http://localhost:6080/arcgis/rest/services/JsMap/MapServer/0", ftLayer); 
        FeatureLayer.isVisible = true; 
        Map.addLayer(FeatureLayer); 
        FeatureLayer.setDefinitionExpression("name like ''"); 

        dojo.connect(Map, 'onLoad', function (theMap) { 
            dojo.connect(dijit.byId('map'), 'resize', MapResize); 
        }); 
        dojo.connect(FeatureLayer, "onUpdateEnd", MapUpdateEnd); 
    } 
    
    function MapResize() { 
        clearTimeout(resizeTimer); 
        resizeTimer = setTimeout(function () { 
            Map.resize(); 
            Map.reposition(); 
        }, 500); 
    } 
    
    //查询按钮触发函数 
    function QueryFeatureLayer(event) { 
        var queryName = document.getElementById("txtName").value; 
        if (queryName == "") 
            return; 
                var whereStr = " name like '%" + queryName + "%'"; 
        FeatureLayer.setDefinitionExpression(whereStr); 
    } 

    function MapUpdateEnd(error) { 
        if (FeatureLayer.graphics.length > 0) { 
            Map.graphics.clear(); 
            var htmls = "<table style=\"width: 100%\"><tr>"; 
            htmls = htmls + "<td>查询结果</td>" 
            htmls = htmls + "</tr></table>"; 
            htmls = ""; 
            htmls = htmls + "<table style=\"width: 100%\">"; 
            for (var i = 0; i < FeatureLayer.graphics.length; i++) { 
                var graphic = FeatureLayer.graphics[i]; 
                var geometry = graphic.geometry; 
                var PoiName = graphic.attributes["name"]; 
                if (i % 2 == 0) 
                    htmls = htmls + "<tr>"; 
                else 
                    htmls = htmls + "<tr bgcolor=\"#F0F0F0\">"; 
                htmls = htmls + "<td>" + PoiName + "</td>"; 
                htmls = htmls + "</tr>"; 
                var textSymbol = new esri.symbol.TextSymbol(PoiName); 
                textSymbol.setColor(new dojo.Color([128, 0, 0])); 
                textSymbol.setFont(font); 
                textSymbol.setOffset(0, 10); 
                var graphicText = esri.Graphic(graphic.toJson()); 
                graphicText.setSymbol(textSymbol); 
                Map.graphics.add(graphicText); 
            } 
            htmls = htmls + "</table>"; 

            document.getElementById("divShowResult").style.overflow = "scroll"; 
            document.getElementById("divShowResult").innerHTML = htmls; 
                } 
        else { 
            document.getElementById("divShowResult").innerHTML = ""; 
        } 
    } 