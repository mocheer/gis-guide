#   Tianditu

|地图类型|服务类型|显示级别|服务调用地址|
|-------|-------|-------|-----------|
|矢量|底图|2-18级|t0.tianditu.com/services/vec_c|
|矢量|中文注记|2-18级|t0.tianditu.com/services/cva_c|
|影像|底图|2-18级|t0.tianditu.com/services/img_c|
|影像|中文注记|2-18级|t0.tianditu.com/services/cia_c|
|地形|底图|2-18级|t0.tianditu.com/services/ter_c|
|地形|中文注记|2-18级|t0.tianditu.com/services/cta_c|

备注：

_c为经纬度直线投影

_w为墨卡托投影

镜像服务器数量：7

瓦片地址如下（以矢量底图为例）:

3857:
- http://t{s}.tianditu.cn/DataServer?T=vec_c&X={1}&Y={2}&L={3}

4326
- http://t{s}.tianditu.com/cva_c/wmts/{z}/{y}/{x} ? 有误
- http://t{s}.tianditu.com/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={3}&TILEROW={2}&TILECOL={1}&FORMAT=tiles
