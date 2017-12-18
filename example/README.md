# Example

## 对齐定位

````css
.wrap {
    width:200px;
    height:200px;
    border:1px solid #ABCDEF;
    border-width: 1px 2px 3px 4px;
    position:relative;
}
.targetWrap {
    padding:20px;position:relative;
}
.target {
    width:100px;height:100px;background-color:skyblue;
    border:1px solid pink;
    border-width: 1px 2px 3px 4px;
}
.el {
    width:20px;height:20px;background-color:purple;
    /* useCssTransform */
    transition: transform .3s;
}
.options{font-size:12px;height:8em;width:20em;}
````

````html
<div class="wrap" id="wrap1" >
    <div class="targetWrap">
        <br />
        <div id="target1" class="target"  ></div>    
    </div>
    <div id="el1" class="el" ></div>
</div>
<form id="set">
<textarea class="options" id="options">{
    "baseOn":{
        "el": "left top",
        "target": "left top"
    }
}</textarea>
<button type="submit" >Set</button>
</form>
````

````demo
{
    title: '基础定位',
    html: '<div id="example__basic"></div>',
    desc: '将 `el` 定位到 `target` 左上角',
    file: './basic.demo.js'
}
````

## defaultProps

````demo
{
    title: '',
    html: '',
    desc: '',
    file: '../lib/defaultProps.js'
}
````


## 注意事项

`dom-position` 并没有监听窗口改变或dom改变时改变位置,如果你有这样的需求,请自行监听
`onresize` .遇到极端情况需要定时定位时一定要使用 `requestAnimFrame`
