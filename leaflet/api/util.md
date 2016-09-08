#   L.Util
    在leaflet内部使用的多种实用的函数。
##  Methods（方法）
    extend()：将src对象（或多个对象）的属性合并到dest对象中并将其返回。具有一个L.extend的快捷方式。
    bind()：返回由给定范围的obj执行fn函数的函数（所以关键字this可以表示函数代码里的obj）。具有一个L.bind快捷方式。
    stamp()：在对象上应用一个主键并返回这个键。具有L.stamp快捷方式。
    limitExecByInterval()：返回调用尽量快的但不会比间隔时间还要频繁的fn函数的包装器（对于拖动地图时检验和请求信的切片比较有用），可以通过context选择函数调用的范围。
    falseFn()：返回总是返回false的函数。
    formatNum()：返回digits位数的num的数目。
    splitWords()：根据空格和空白来截取分割字符串并返回数组。
    setOptions()：将所给的属性合并到obj的options中，返回最终的选项。参加Class options。具有L.setOptions快捷方式。
    getParamString()：将对象转换为带有参数的URL字符串，比如{a:"foo",b:"bar"}转换为'?a=foo&b=bar'。
    template()：是一个简单的模板，用通过将{a:'foo',b:'bar',...}形式的data对象应用到'Hello{a},{b}'形式的模板字符串来创建字符串——在上述示例中可以得到'Hello foo,bar'。
    isArray()：如果对象为数组则返回true。
    Properties（属性）
    emptyImageUrl：包含64位编码的空的GIF图像的数据URL字符串。在webkit驱动的移动设备的上，用来作为清空没用图像的存储的钩子。