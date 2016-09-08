    //动态2D地图服务加载示例 
    function init() {
        // 创建最外层的 BorderContainer  
        var borderContainer = this.borderContainer = new dijit.layout.BorderContainer({
            design: "headline",
            style: "width: 1000px; height: 600px;"
        }, "borderContainer");
        // 创建页面的 header 
        var headerContent = this.headerContent = new dijit.layout.ContentPane({
            style: "height:40px",
            region: "top"
        }, dojo.create("div", {
            id: "mapheader"
        }));
        headerContent.setContent("动态2D地图");
        //创建地图的容器 
        var centContent = new dijit.layout.ContentPane({
            region: "center"
        },
            dojo.create("div",
                {
                    id: "mymap"
                }));
        var bottomContent = new dijit.layout.ContentPane({
            region: "bottom",
            style: "height : 40px",
            dojo.create("div", {
                id: "mapbtm"
            }) );
        bottomContent.setContent("测试");
        //给border布局对象中添加子类对象 
        borderContainer.addChild(headerContent);
        borderContainer.addChild(centContent);
        borderContainer.addChild(bottomContent);
        // 因为没有用到声明式的方式创建控件，所以一定要有这句话 
        borderContainer.startup();
        var mapoption = {}; //JSON对象 
        mapoption.center = esri.geometry.Point(116, 39); //这个点处于地图的中间 
        map = new esri.Map("mymap", mapoption);
        var layer = new esri.layers.ArcGISDynamicMapServiceLayer("http://localhost:6080/arcgis/rest/services/JsMap/MapServer");
        map.addLayer(layer);
        dojo.connect(map, 'onLoad', function (theMap) { dojo.connect(map, 'resize', MapResize); });
    }

