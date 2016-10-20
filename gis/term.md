#  Term
EPSG（欧洲石油调查小组）：European Petroleum Survey Group (EPSG)，它成立于1986年，并在2005年重组为OGP(Internation Association of Oil & Gas Producers)，它负责维护并发布坐标参照系统的数据集参数，以及坐标转换描述，该数据集被广泛接受并使用，通过一个Web发布平台进行分发，同时提供了微软Acess数据库的存储文件，通过SQL 脚本文件，mySQL, Oracle 和PostgreSQL等数据库也可使用。
目前已有的椭球体，投影坐标系等不同组合都对应着不同的ID号，这个号在EPSG中被称为EPSG code，它代表特定的椭球体（Spheroid）、单位、地理坐标系或投影坐标系等信息。

SRID：空间参考标识符 (SRID) 是与特定坐标系、容差和分辨率关联的唯一标识符。OGC标准中的参数SRID，也是指的空间参考系统的ID，与EPSG一致

PPI（Pixel Per Inch）是指每英寸包含的像素数

DPI（Dot Per Inch），是指每英寸打印的点数，随着数字化的输入输出设备的发展，很多人也把数字图像的解析度用DPI来表示。常见的dpi有96dpi、72dip

GML 用于空间数据传输与转换的地理信息标记语言

#   其他
- [https://github.com/mocheer/map](https://github.com/mocheer/map) 
    Web墨卡托投影和高斯-克里格投影以及线性投影的实现
- [https://github.com/mocheer/react-map](https://github.com/mocheer/react-map) 
    基于react，一个简单的地图框架(好吧，目前还什么都没有)
- [https://github.com/wandergis/coordtransform](https://github.com/wandergis/coordtransform)
    wgs84坐标和火星坐标、百度坐标之间的转换

### 瓦片下载工具

1. 太乐地图：[ArcTilerDesktopV3.5.rar](http://www.arctiler.com/)
2. 全能电子地图下载器：MapTileDownloader1.8.3.exe，[http://code.google.com/p/maptiledownloader/](http://code.google.com/p/maptiledownloader/)
3. TileDownloader: 

- [http://www.softpedia.com/progDownload/Tile-Downloader-Download-198232.html](http://www.softpedia.com/progDownload/Tile-Downloader-Download-198232.html)
- [http://sourceforge.net/projects/tiledownloader/files/1.3/release1.3-bin.zip/download](http://sourceforge.net/projects/tiledownloader/files/1.3/release1.3-bin.zip/download)

公式&代码实现：http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames