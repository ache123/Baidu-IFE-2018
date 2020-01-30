# day4验证问题

- 背景，边框，列表，链接相关属性

  > - 背景
  >
  >   > 背景颜色background-color
  >   >
  >   > 背景图像background-image
  >   >
  >   > 背景重复background-repeat（repeat-x、repeat-y、no-repeat）
  >   >
  >   > 背景位置background-position
  >   >
  >   > 背景关联background-attachment
  >
  > - 边框
  >
  >   > 边框样式border-style
  >   >
  >   > 边框宽度border-width
  >   >
  >   > 边框颜色border-color
  >
  > - 列表
  >
  >   > 列表类型list-style-type
  >   >
  >   > 列表图像list-style-image
  >   >
  >   > 列表位置list-style-position
  >
  > - 链接
  >
  >   > a:link 普通的、未被访问的链接
  >   >
  >   > a:visited 已访问的链接
  >   >
  >   > a:hover 鼠标滑过链接时
  >   >
  >   > a:active 鼠标点击链接时

- CSS 各种选择器的概念，使用方法及使用场景

  > 派生选择器：eg：选中 li 中的 strong    li strong{}
  >
  > 伪类选择器：（：伪类名）eg：article p:first-child {}、a:visited {}
  >
  > 伪元素选择器：（：：伪元素名）eg：article p::first-line {}、.box::before {}、.box::after {}

- CSS 选择器的优先级

  > 1. 相同特性的规则，排在后面的被使用
  > 2. 更具体的选择器被使用
  > 3. 子元素可以继承父元素的内容
  > 4. 在选择器中使用 all:unset 可以重置所有属性值