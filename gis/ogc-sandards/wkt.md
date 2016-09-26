#  WKT
WKT（Well-known Text）)是一种文本标记语言，用于表示矢量几何对象、空间参照系统及空间参照系统之间的转换。

|几何类型|WKT 例子|说明|
|-------|--------|----|
|Point|Point (10 10)|点|
|LineString|LineString ( 10 10, 20 20, 30 40)|有3个节点的线|
|Polygon|Polygon ((10 10, 10 20, 20 20, 20 15, 10 10))|只有1个外环的多边形|
|MultiPoint|MultiPoint((10 10),(20 20))	|多点|
|MultiLineString|MultiLineString((10 10, 20 20),(15 15, 30 15))|多线|
|MultiPolygon|MultiPolygon|多面|
|GeometryCollection|GeometryCollection|几何集合|
|PolyhedralSurface|PolyhedralSurface Z|多个表面构成的立方体|
|Tin|Tin Z|4个三角形构成的TIN网格|
|Point|Point Z (10 10 5)|三维点|
|Point|Point ZM (10 10 5 40)|带M值的三维点|
|Point|Point M (10 10 40)|带M值的二维点|

## WKT描述的空间参考
WKT除了可以描述几何对象，也可以描述空间参考。


1. 对于一个地理坐标系，比如最常见的WGS84坐标系统，WKT描述是这样的：


    GEOGCS
    [
        "GCS_WGS_1984",
        DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],
        PRIMEM["Greenwich",0.0],
        UNIT["Degree",0.0174532925199433],
        AUTHORITY["EPSG",4326]
    ]

- "GEOGCS"表明描述的是一个地理坐标系统。
- 该坐标系统名称为"GCS_WGS_1984"；
- 采用的大地基准面为"D_WGS_1984"，该基准面近似椭球体的长轴为6378137.0米、扁率为298.257223563；
- 以格林威治0度经线为起始经线；
- 地图单位为度，该单位的转换因子(一个单位所代表的米或所代表的弧度数)为0. 0174532925199433（π/180）；
- 该坐标系统在EPSG中的编码为"4326"。

2. 对于一个投影坐标系，比如WGS84 Web Mercator（Auxiliary Sphere）坐标系统，WKT描述是这样的：


    PROJCS
    [
        "WGS_1984_Web_Mercator_Auxiliary_Sphere",
        GEOGCS
        [
        "GCS_WGS_1984",
        DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],
        PRIMEM["Greenwich",0.0],
        UNIT["Degree",0.0174532925199433]
        ],
        PROJECTION["Mercator_Auxiliary_Sphere"],
        PARAMETER["False_Easting",0.0],
        PARAMETER["False_Northing",0.0],
        PARAMETER["Central_Meridian",0.0],
        PARAMETER["Standard_Parallel_1",0.0],
        PARAMETER["Auxiliary_Sphere_Type",0.0],
        UNIT["Meter",1.0],
        AUTHORITY["EPSG",3857]
    ]

- "PROJCS"代表这是一个投影坐标系。
- 投影坐标系中必然会包括一个地理坐标系，这里的地理坐标系就是"GCS_WGS_1984"，
- "Mercator_Auxiliary_Sphere"是采用投影的名称，这个投影坐标系以0度经线为中央经线进行投影；
- 坐标系的单位为米（显然，转换因子就为1.0），而该坐标系的EPSG编码为"3857"。






