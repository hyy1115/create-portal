# create-portal

一个封装好的react portal组件，你不需要在body下面写静态的HTML，使用create-portal可以自动生成DOM结构。

### 安装
```node
npm i --save create-portal
```

### 用法

1、组件用法
```javascript
<CreatePortal
  element={`a`} //String，默认为div
  id={`id`} //tring，可以不设置
  className={`classname`} //String，可以不设置
  style={{width: '100px'}} //Object，可以不设置
 >
    此处插入div或者react组件
</CreatePortal>
```

2、渲染结果
```html
<body>
<div id="root"}>通常这是你的React根入口的元素</div>

<!--portal生成的DOM结构位于根元素之外-->
<a id="id" class="classname" style="width: 100px">
    此处插入div或者react组件
</div>
</body>
```