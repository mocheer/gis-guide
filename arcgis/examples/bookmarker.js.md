//书签示例

//创建书签
function BookMarks() {
    Books = new esri.dijit.Bookmarks({
        map: Map,
        editable: "true"
    }, dojo.byId("bookmarks"));
}

//添加书签 
function addBook() {
    var bookextent = Map.extent;
    var bookmarkItem = new esri.dijit.BookmarkItem({
        "extent": bookextent,
        "name": "北京"
    });
    Books.addBookmark(bookmarkItem);
}

