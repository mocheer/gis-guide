#  TMS瓦片坐标系
TMS(Tile Map Service)来自于OSGeo,是纯RESTful的瓦片服务

TMS瓦片坐标系：把地球投影后形成的正方形划分为2的level(缩放级别)次幂个地图瓦片,原点在左下角，类似于像素坐标系。

## 特点
- 切割后的瓦片数量随层级呈金字塔型
- 瓦片是正方形

### 支持TMS切片的在线地图
- Google Map (原点在左上角) 

  Y(TMS) +  Y(Google) = Math.pow(2，zoom) - 1