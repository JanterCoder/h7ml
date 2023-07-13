import{_ as n,o as s,c as a,f as e}from"./app-2a9bb723.js";const t={},p=e(`<h1 id="javascript-获取节点-操作节点" tabindex="-1"><a class="header-anchor" href="#javascript-获取节点-操作节点" aria-hidden="true">#</a> JavaScript 获取节点，操作节点</h1><h2 id="获取节点" tabindex="-1"><a class="header-anchor" href="#获取节点" aria-hidden="true">#</a> 获取节点</h2><p>父节点.childNodes 获取子节点（包含一切节点）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>p<span class="token punctuation">.</span>nodeType <span class="token operator">==</span> <span class="token number">1</span><span class="token comment">// true 判断是否存在节点 是不是一个元素</span>
<span class="token comment">// 1 元素节点 2 属性节点 3 文本节点</span>

p<span class="token punctuation">.</span>nodeName
<span class="token comment">// #text 文本节点的名字</span>
<span class="token comment">// P  元素节点的元素名 大写</span>
<span class="token comment">// #comment 注释节点的名字</span>

p<span class="token punctuation">.</span>nodeValue <span class="token comment">// 文本节点的内容</span>
<span class="token comment">// 必须是文本节点，元素节点会返回 null</span>

父元素<span class="token punctuation">.</span>children 获取子节点
<span class="token comment">// IE9+ 正常</span>
<span class="token comment">// IE8-中 会获取 注释和元素节点</span>

<span class="token comment">// 父节点</span>
p<span class="token punctuation">.</span>parentNode<span class="token punctuation">;</span><span class="token comment">// 获取直系父元素</span>
p<span class="token punctuation">.</span>offsetParent<span class="token punctuation">;</span><span class="token comment">// 获取上一个带有定位的父元素，position:stalic不算</span>
<span class="token comment">/*
兼容方法
  firstchild 都有值，firstElementChild IE 会 undefined
  短路运算
  firstElementChild || firstchild;
*/</span>

<span class="token comment">// 子节点</span>
p<span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span><span class="token comment">// 标准浏览器获取第一个 文本或换行 节点，IE 只获取第一个元素</span>
p<span class="token punctuation">.</span>firstElementChild<span class="token punctuation">;</span><span class="token comment">// 标准浏览器只获取第一个元素，IE 为 undefined</span>
lastElementChild <span class="token operator">||</span> lastChild<span class="token punctuation">;</span> 最后一个子节点

<span class="token comment">// 兄弟节点</span>
p<span class="token punctuation">.</span>previousElementSibling <span class="token operator">||</span> p<span class="token punctuation">.</span>previousSibling<span class="token punctuation">;</span><span class="token comment">// 上一个兄弟节点</span>
p<span class="token punctuation">.</span>nextElementSibling <span class="token operator">||</span> p<span class="token punctuation">.</span>nextSibling<span class="token punctuation">;</span><span class="token comment">// 下一个兄弟节点</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作节点" tabindex="-1"><a class="header-anchor" href="#操作节点" aria-hidden="true">#</a> 操作节点</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 新建节点</span>
<span class="token keyword">var</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 新建li元素</span>
<span class="token keyword">var</span> text <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">&#39;wenben&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 新建文本</span>

<span class="token comment">// 插入节点</span>
父节点<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 父节点的末尾插入</span>
父节点<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>li<span class="token punctuation">,</span> 参照子节点<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在参照子节点前插入</span>

<span class="token comment">// 替换节点</span>
<span class="token comment">// 替换之前的文本依然还在 ，但它在文档中已经没了自己的位置</span>
父节点<span class="token punctuation">.</span><span class="token function">replaceChild</span><span class="token punctuation">(</span>新节点<span class="token punctuation">,</span> 被替换的子节点<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 替换</span>

<span class="token comment">// 删除节点</span>
<span class="token comment">// 移除的节点仍然为文档所有，只不过没有了自己的位置</span>
父节点<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>子节点<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 删除子节点</span>
节点<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 自己删除自己</span>

<span class="token comment">// 克隆节点</span>
节点<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认：只复制本身空标签</span>
节点<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 本身与所有子节点都复制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function i(l,o){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","节点操作.html.vue"]]);export{d as default};
