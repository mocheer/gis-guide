#  WCS(栅格Web服务)
Web（OpenGIS® Web Coverage Service）面向空间影像数据，它将包含地理位置值的地理空间数据作为"覆盖（COverage）"在网上相互交换。如卫星影像、数字高程数据等栅格数据。

网络覆盖服务由三种操作组成：

- GetCapabilities 返回描述服务和数据集的XML文档。
- GetCoverage  是在GetCapabilities确定什么样的查询可以执行、什么样的数据能够获取之后执行的，它使用通用的覆盖格式返回地理位置的值或属性。
- DescribeCoverageType  支持用户从特定WCS服务器获取一个或多个覆盖的详细的描述文档。

 
