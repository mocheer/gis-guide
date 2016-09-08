#   L.DomEvent
    在leaflet内部用来处理DOM事件的应用函数。
##  Methods（方法）
    addListener()：向指定类型的DOM事件元素添加监听器fn。监听器中的this关键字指向context，或是在没有说明的情况下指向要素。
    removeListener()：在元素中移除事件监听器。
    stopPropagation()：停止事件向父元素传播。
    preventDefault()：阻止事件默认的动作发生（比如追踪元素href中的链接，或是当form提交时页面重载的POST请求）。
    stop()：在同一时刻发起stopPropagation和preventDefault。
    disableClickPropagation()：将stopPropagation添加到元素的'click','doubleclick','mousedown'和'touchstart'事件中。
    getMousePosition()：如果没有特意说明则获取与容器或整个页面相关的DOM事件的标准的鼠标位置。
    getWheelDelta()：从mousewheel的DOM事件中获取标准的滚轮区域。