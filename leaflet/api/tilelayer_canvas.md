#   L.TileLayer.Canvas
    用来创建浏览器端绘制的切片图层的底层画布。
##  Constructor（函数构造器）
    L.TileLayer.Canvas()：通过一个具有选项的对象来实例化一个切片图层画布对象。
##  Options（选项）
    async：在实例化时可以异步地绘制切片。在全部绘制完后，tileDrawn方法需要在每个切片上使用。
##  Methods（方法）
    drawTile()：在创建实例来绘制切片后你需要定义此方法；canvas是你可以绘制的实际上的切片画布，tilePoint反应了切片的数目，zoom是当前的缩放级别。
    tileDrawn()：如果async选项被定义，在全部绘制完后，这个函数需要在每个切片上使用。canvas与画布对象相同，传递参数给drawTile。