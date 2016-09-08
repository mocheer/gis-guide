#   Events methods
    一系列事件驱动的类（比如map）之间共享的方法。通常，事件允许你在一个对象发生某些事情时执行一些函数。
    leaflet通过引用来处理事件监听器，所以如果你想咬添加或移除一个监听器时，可以用函数的方法。
##  Methods（方法）
    addEventListener(类型,函数,内容)：向某一类型的事件中添加监听器函数。你可以选择性地指定监听器的内容（对象中this关键字会被使用）。你也可以传递几个空格间隔的类型（如"click dbclick"）。
    addEventListener(发生事件的地图,内容)：添加一系列的类型/监听器对，如{click:Onclick,mousenove:onMouseMove}
    removeEventListener(类型,函数,内容)：移除之前添加的监听器函数。如果没有指定具体的函数，则所以的都会被移除。
    removeEventListener(发生事件的地图,内容)：移除一系列类型/监听器对。
    hasEventListener()：如果某一事件类型有附属的监听器则返回true。
    fireEvent()：触发指定类型的事件。你可以提供一个数据对象——监听器对象的第一个参数应该包含它的属性。
    on()：addEventListener的别称。
    off()：removeEventListener的别称。
    fire()：fireEvent()的别称。
