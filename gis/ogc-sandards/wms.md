#   WMS(Web地图服务)
WMS(OpenGIS® Web map service) 利用具有地理空间位置信息的数据制作地图。其中将地图定义为地理数据可视的表现。这个规范定义了三个操作：
- GetCapabitities 返回服务级元数据，它是对服务信息内容和要求参数的一种描述。
- GetMap 返回一个地图影像，其地理空间参考和大小参数是明确定义了的。
- GetFeatureInfo（可选）返回显示在地图上的某些特殊要素的信息。
- GetLegendGraphic：返回地图的图例信息。

Web地图服务返回的是图层级的地图影像，能够根据用户的请求返回相应的地图（包括PNG，GIF，JPEG等栅格形式或者是SVG和WEB CGM等矢量形式）。WMS支持网络协议HTTP，所支持的操作是由URL定义的。

 
