#   L.Marker
    用来在地图中放置注记。
##  Constructor（构造函数）
    L.Marker（）：通过给定一个地理点和一个具有选项的对象来实例化一个注记。
##  Options（选项）
    icon（图标）：图标类用来表达注记。参加Icon documentation以了解自定义注记图标的详细信息。默认设置为new L.Icon.Default()。
    clickable（可点击）：如果是false，注记则不产生鼠标事件并表现为底层地图的一部分。
    draggable（可拖动）：决定注记是否可被鼠标或触摸拖动。
    title（标题）：注记旁边显示浏览器提示的文本信息。
    zIndexOffset（）：默认情况下，注记图片的叠置顺序由纬度自动设置。如果你想将某一注记放置于其他之上可用这个选项，设置一个较大的值即可，比如1000（或是相反地设置一个较大的负值）。
    opacity（不透明度）：决定注记的不透明度。
    riseOnHover（凸显）：如果此值为true，则当把鼠标放置于注记之上时，注记会显示与其他注记之上。
    riseOffset（凸显补偿）：riseOnHover要素凸显时高度的补偿值。
##  Events（事件）
    click（点击）：当鼠标点击注记时触发。
    dbclick（双击）：当鼠标双击注记时触发。
    mousedown（鼠标按下）：当鼠标按下鼠标键时触发。
    mouseover（鼠标置于其上）：当鼠标在注记上时触发。
    mouseout（鼠标移出）：当鼠标离开注记时触发。
    contextmenu（文本菜单）：当鼠标右击注记时触发。
    dragstrat（拖动开始）：当用户拖动注记时触发。
    drag（拖动）：当用户拖动注记时不断触发。
    dragend（拖动结束）：当用户停止拖动注记时触发。
    move（移动）：当注记通过定义经纬度而移动时触发。新的坐标包含事件参数。
    remove（删除）：当注记在地图上被删除时触发。
    Methods（方法）
    addTo()：在地图上添加注记。
    getLatLng()：返回当前注记的地理位置。
    setLatLng()：将注记位置更改到给定点。
    setIcon()：更改注记的图标。
    setZIndexOffset()：更改注记的zIndex offset。
    setOpacity()：更改注记的透明度。
    update()：更新注记的位置，在直接更改经纬度对象的坐标时比较有用。
    bindPopup()：当点击一个注记时绑定一个特定的HTML内容的弹出窗口。你也可以用Marker中的openPopup方法打开绑定的弹出窗口。
    unbindPopup()：将先前用bindPopup方法绑定的注记取消。
    openPopup()：打开先前用bindPopup方法绑定的弹出框。
    closePopup()：关闭已打开的注记的弹出框。
    Interaction handlers（互操作处理程序）
    dragging（拖动）：注记拖动处理程序（包括鼠标和触摸）。