学习笔记

思考题:
为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢?
first-letter 是在布局完成之后，确定了一段文字中的第一个文字，可以对其操作布局时性能开销小；
而 first-line 选中的是第一行文字，不同的宽度选中的文字内容不一样，要对其重新布局排版消耗性能大,所以 first-letter 可以设置 float 之类的，而 first-line 不行。

总结:
css 选择器
简单选择器，复合选择器，复杂选择器

排版技术
正常流
flex
grid
