#   L.Class
    L.Class强化了leaflet的面向对象的设备并被用于创建几乎所哟这里提到的leaflet类。
    除了执行一个简单的类接口模型，它还引入了方便代码组织的一下特殊的属性——options，includes和statics。
##  Inheritance（继承）
    可以用L.Class.extend来定义新的类，但可以在任何一个类上用同样的方法来继承它。
    这会创建一个继承父类所有方法和属性的类（由规范所约束），添加或重构你用来扩展的类。这也对instanceof做出反应。
    你可以通过父类的规范和javascript的call与apply来调用父类的方法来响应子类的方法（就像你在其他语言中调用超类）。
##  Options（选项）
    options是一个与其他对象不同的特殊的属性，其他你用来扩展的对象会被父类合并而非完全重构，这使管理对象的结构和默认值更加方便。
    选项中还有L.Util.setOptions方法，可以方便地合并传递给函数构造器的选项和类中默认的定义。
##  Includes（包含）
    includes是一个特殊的类，它将所有对象合并到一个类中。一个较好的例子是L.Mixin.Event，它是具有on、off和fire这些鱼事件相关的方法的类。
##  Statics（静态）
    statics是一种方便的属性，将类中指定对象的属性变为静态属性，对于定义常量比较有用。
    Class Factories（类工厂）
    你可以用个两种方式来创建leaflet的实例——用new关键字和用小写的factory方法。
##  Constructor Hooks（构造函数钩子）
    如果你是一个插件开发者，你通常需要在现有的类中加入附件的初始化代码（比如因L.Polyline而编辑钩子）。leaflet可以用addInitHook方法来简化它。