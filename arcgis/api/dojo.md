#   dojo
[https://dojotoolkit.org/](https://dojotoolkit.org/)
##  require
     //加载esri/map.js 
    dojo.require("esri.map");
##  onload
    dojo.addOnLoad(function (){ 
        var MyMap = new esri.Map("MyMapDiv"); 
        var MyTiledMapServiceLayer = new esri.layers.ArcGISTiledMapServiceLayer("http://www.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer"); 
        MyMap.addLayer(MyTiledMapServiceLayer)； 
        } 
    ) 
##  byId 
    //dojo.byId的作用和document.getElementsById 相同，是针对Dom节点元素的，
    //Dijit 是针对dojo的小部件，dijit.byId可以通过ID迒回小部件对象。 
    dojo.addOnLoad(function(){ 
        var mymap = dojo.byId("map"); 
    }); 
##  create
    //dojo.create()用来创建一个DOM对象，幵讴置一些列操作
    //原型为：dojo.create(tag, attrs, refNode, pos);
    dojo.create("div",{id:"mapbtm"}) 
##  query
    //返回DOM节点的列表，以css选择器来实现
    dojo.query(".blueButton").forEach(function(node, index, arr){ });
##  connect
    //dojo.connect 用于为指定的元素添加事件，比如当地图发生onload事件的时候，调用mapload函数。 
    dojo.connect(map, 'onload',mapload); 
    var mapload=function{    
        map.centerAt(esri.geometry.Point(116, 34)); 
    }
##  forEach 
    dojo.forEach(geometries,function (element, index) {
        var graphic = new esri.Graphic(element, PolygonSymbol);
        Map.graphics.add(graphic);
    }); 
##  dojo.hasClass 
    用于判断给定的DOM节点是否有指定的CSS class。 
##  dojo.addClass
    用亍为给定的DOM节点增加指定的CSS class。 