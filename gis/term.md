#  Term
EPSG（欧洲石油调查小组）：European Petroleum Survey Group (EPSG)，它成立于1986年，并在2005年重组为OGP(Internation Association of Oil & Gas Producers)，它负责维护并发布坐标参照系统的数据集参数，以及坐标转换描述，该数据集被广泛接受并使用，通过一个Web发布平台进行分发，同时提供了微软Acess数据库的存储文件，通过SQL 脚本文件，mySQL, Oracle 和PostgreSQL等数据库也可使用。
目前已有的椭球体，投影坐标系等不同组合都对应着不同的ID号，这个号在EPSG中被称为EPSG code，它代表特定的椭球体（Spheroid）、单位、地理坐标系或投影坐标系等信息。

SRID：空间参考标识符 (SRID) 是与特定坐标系、容差和分辨率关联的唯一标识符。OGC标准中的参数SRID，也是指的空间参考系统的ID，与EPSG一致

WKT：(well-known binary)是一种文本标记语言，用于表示矢量几何对象、空间参照系统及空间参照系统之间的转换。它的二进制表示方式，亦即WKB(well-known binary)则胜于在传输和在数据库中存储相同的信息。该格式由开放地理空间联盟(OGC)制定。

#   其他
-   [https://github.com/mocheer/map](https://github.com/mocheer/map) 
    Web墨卡托投影的实现
-   [https://github.com/mocheer/react-map](https://github.com/mocheer/react-map) 
    基于react，一个简单的地图框架
-   [https://github.com/wandergis/coordtransform](https://github.com/wandergis/coordtransform)
    wgs84坐标和火星坐标、百度坐标之间的转换

### 瓦片下载工具

1. 太乐地图：[ArcTilerDesktopV3.5.rar](http://www.arctiler.com/)
2. 全能电子地图下载器：MapTileDownloader1.8.3.exe，[http://code.google.com/p/maptiledownloader/](http://code.google.com/p/maptiledownloader/)
3. TileDownloader: 

-   [http://www.softpedia.com/progDownload/Tile-Downloader-Download-198232.html](http://www.softpedia.com/progDownload/Tile-Downloader-Download-198232.html)
-   [http://sourceforge.net/projects/tiledownloader/files/1.3/release1.3-bin.zip/download](http://sourceforge.net/projects/tiledownloader/files/1.3/release1.3-bin.zip/download)

坐标转换工具

-   [http://rovertang.com/labs/tileindex/](http://rovertang.com/labs/tileindex/) 
-   [http://rovertang.com/archives/545](http://rovertang.com/archives/545) 
-   [http://rovertang.com/labs/GMAPIv3_Offline/](http://rovertang.com/labs/GMAPIv3_Offline/) 

公式&代码实现：http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames