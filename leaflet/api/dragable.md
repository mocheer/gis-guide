#   L.Draggable
    使DOM元素可以拖动的类。在内部被用来拖动地图和注记。
##  Constructor（函数构造器）
    L.Draggable()：创建可拖动对象，这样在你开始移动dragHandle元素时就可以移动给定元素了（默认同元素自身是同一个）。
    Events（事件）
    dragstart：拖动开始时触发。
    predrag：在拖动过程中相应元素位置更新之前持续触发。
    drag：拖动过程中持续触发。
    dragend：拖动结束后触发。
    Methods（方法）
    enable()：使拖动功能可用。
    disable()：使拖动功能不可用。