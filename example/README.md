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
    transition: left top .3s;
}
.options{font-size:12px;height:8em;width:20em;}
````

````html
<div class="wrap">
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
