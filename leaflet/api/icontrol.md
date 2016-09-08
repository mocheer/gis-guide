#   IControl
    在地图的某个角上显示UI元素。被zoom，attribution，scale和layers controls所继承。
##  Methods（方法）
    onAdd()：包含所有用于在相关地图事件上控制、添加监听器的创建必要DOM要素的代码，并返回包含控制的元素。调用map.addControl(control)或control.addTo(map)。
    onRemove()：包含所有清除代码（比如0移除控制事件监听器）。调用map.removeControl(control)或control.removeFrom(map)。控制的DOM容器自动移除。
