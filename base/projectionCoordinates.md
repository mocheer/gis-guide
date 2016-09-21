#   投影坐标系(PCS-平面坐标系)
投影：将地球椭球面上的点映射到平面上的方法。不同的投影方式会产生不同程度的变形。

常用的投影方法有：
* 墨卡托投影(Mercator Projection)
* Web墨卡托投影(Web Mercator or Spherical Mercator,也称"正轴等角圆柱投影"、"球形墨卡托投影")
* UTM投影(Universal Transverse  Mercator,也称"通用横轴墨卡托投影",横轴墨卡托投影的变种)
* 高斯-克吕格投影(Gauss-Krueger projection,也称"等角横轴切圆柱投影",横轴墨卡托投影的变种)
* 经纬度等间隔投影(直线投影)
* 兰勃特投影

##  常用的EPSG Code
|名称|EPSG Code|
|----|----| 
|PCS_WGS_1984_WORLD_MERCATOR|3857|

##  tag 
UTM投影、高斯-克吕格投影都是横轴墨卡托投影的变种。近似换算公式：

X（UTM）=0.9996* (高斯)  和y（UTM）=0.9996* (高斯)

另外，高斯-克吕格投影与UTM北半球投影中规定将坐标纵轴西移500公里当作起始轴,而UTM 南半球投影除了将纵轴西移500公里外，还将横轴南移10000公里。

UTM投影与Gauss-Krüger投影的x和y坐标是相反的，即UTM投影中x和y分别为经向和纬向数值，而Gauss-Krüger投影中x和y分别为纬向和经向数值。具体原因源自于其投影数学公式。


