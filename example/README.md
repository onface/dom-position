# Basic

## Basic

````css
.wrap1 {
    width:200px;
    height:300px;
    border:1px solid #ABCDEF;
    border-width: 1px 2px 3px 4px;
    position:relative;
}
.target1 {
    width:100px;height:100px;background-color:skyblue;
}
.el1 {
    width:20px;height:20px;background-color:purple;
}
````

````html
<div class="wrap1">
    <div style="padding:20px;position:relative;">
        <br />
        <div id="target1" class="target1"  ></div>    
    </div>
    <div id="el1" class="el1" ></div>
</div>
````

````demo
{
    title: '基础定位',
    html: '<div id="example__basic"></div>',
    desc: '`el` 设置定位元素, `target` 设置目标元素.',
    file: './basic.demo.js'
}
````
