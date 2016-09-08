    //比例尺示例
    function Scalebar() {
        var scalebar = new esri.dijit.Scalebar({
             map: Map, attachTo: "top-right" },
             dojo.byId("scaleBarDiv"));
    }