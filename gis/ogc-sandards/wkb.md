# WKB
WKB(well-known binary)通过序列化的字节对象来描述几何对象，胜于在传输和在数据库中存储相同的信息。

在WKB中主要涉及两种数值类型：
- uint32，占4个字节，用以存储节点数、几何对象类型等信息
- double，占8个字节，用以存储节点坐标值

WKB在第一位还存储了一个额外的字节用来标识字节序（0=Big-Indian，1=Little-Indian）。