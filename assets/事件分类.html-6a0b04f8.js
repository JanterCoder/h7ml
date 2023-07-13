import{_ as i,o as l,c as e,f as a}from"./app-2a9bb723.js";const r={},o=a('<h1 id="javascript-鼠标事件、键盘事件、表单事件、window-事件" tabindex="-1"><a class="header-anchor" href="#javascript-鼠标事件、键盘事件、表单事件、window-事件" aria-hidden="true">#</a> JavaScript 鼠标事件、键盘事件、表单事件、window 事件</h1><h2 id="鼠标事件" tabindex="-1"><a class="header-anchor" href="#鼠标事件" aria-hidden="true">#</a> 鼠标事件</h2><ul><li>click：单击</li><li>dblclick：双击</li><li>mouseover：移入（子节点会触发）</li><li>mouseout：移出（子节点会触发）</li><li>mousemove：移动（会不停的触发）</li><li>mouseenter：移入（子节点不会触发）IE8+</li><li>mouseleave：移出（子节点不会触发）IE8+</li><li>mousedown：按下（左右键）</li><li>mouseup：抬起（左右键）</li><li>contextmenu：右键单击（上下文环境菜单）</li><li>onmousewheel：chrome ie 滚轮滚动 <ul><li>e.wheelDalta：向下 -120 向上 120</li></ul></li><li>DOMMouseScroll：firefox 只能事件绑定 滚轮滚动 <ul><li>e.detail：向下 3 向上 -3</li></ul></li></ul><h2 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h2><ul><li>keydown：键盘按下（按下不动会一直触发）</li><li>keyup：键盘抬起</li><li>keypress：键盘按下（只支持字符键）</li></ul><h2 id="window-事件" tabindex="-1"><a class="header-anchor" href="#window-事件" aria-hidden="true">#</a> window 事件</h2><ul><li>load：当页面加载完成以后会触发</li><li>unload：当页面解构的时候触发（刷新页面，关闭当前页面）IE 浏览器兼容</li><li>scroll：页面滚动 不停的触发</li><li>resize：窗口大小发生变化 不停的触发</li><li>visibilitychange：标签显示或隐藏时触发</li><li>blur：获取焦点时触发</li><li>focus：失去焦点时触发</li></ul><h2 id="表单事件" tabindex="-1"><a class="header-anchor" href="#表单事件" aria-hidden="true">#</a> 表单事件</h2><ul><li>input：value 值发生改变</li><li>blur：失去焦点</li><li>focus：获取焦点</li><li>select：输入框中文本被选中触发</li><li>change：当输入框被修改且失去焦点必须添加到 form 表单元素上</li><li>submit：点击 submit 按钮才触发</li><li>reset：点击 reset 按钮才触发</li></ul>',9),s=[o];function t(d,n){return l(),e("div",null,s)}const c=i(r,[["render",t],["__file","事件分类.html.vue"]]);export{c as default};
