#  WMTS
WMTS(OpenGIS® Web Map Tile Service)是OGC提出的缓存技术标准，即在服务器端缓存被切割成一定大小瓦片的地图，对客户端只提供这些预先定义好的单个瓦片的服务，将更多的数据处理操作如图层叠加等放在客户端，从而缓解GIS服务器端数据处理的压力，改善用户体验。

WMTS操作：

1. GetCapabilities（获取服务的元信息）

|参数|是否必须|默认值|
|----|------|------|
|SERVICE|是|WMTS|
|REQUEST=GetCapabilities|是|

2. GetTile（获取瓦片）

|参数|是否必须|默认值|
|----|------|------|
|SERVICE|是|WMTS|
|REQUEST=GetTile|是|
|VERSION|是|1.0.0|
|LAYER|是|
|STYLE|是|
|FORMAT|是| 
|TILEMATRIXSET|是|
|TILEMATRIX|是|
|TILEROW|是|
|TILECOL|是|
|Sample dimensions参数|
     
3. GetFeatureInfo（可选，获取点选的要素信息）

|参数|是否必须|默认值|
|----|------|------|
|SERVICE|是|WMTS|
|REQUEST=GetFeatureInfo|是|
|VERSION|是|1.0.0|
|GetTile请求参数|
|I|是| 
|J|是|
|INFOFORMAT|是|

WMTS有三种服务：
- KVP
- SOAP
- RESTful
 
