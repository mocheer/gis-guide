#   Tencent Map
1. 腾讯地图瓦片完全遵循TMS标准
2. 投影坐标系采用Web Mercator投影。
3. 腾讯地图瓦片的坐标原点在左下角[-85.05112877980659,-180]
4. 腾讯瓦片的最小缩放级别为4级，通过与腾讯低级别瓦片地址的对比分析，得出其ULR地址与xyz参数的对应关系如下：

    腾讯瓦片计算方法：URL = z  /  Math.Floor(x / 16.0)  / Math.Floor(y / 16.0) / x_y.png，其中x,y,z为TMS瓦片坐标参数。

5. 与Google瓦片坐标的关系，上式中腾讯地图瓦片坐标的x,z与Google 瓦片坐标系的X 、Z是相等的，Y 的转换关系为：Y(Tencent) +  Y(Google) = Math.pow(2，zoom) - 1