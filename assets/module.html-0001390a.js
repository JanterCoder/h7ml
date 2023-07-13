import{_ as p,r as t,o as i,c as l,a as n,d as a,b as s,w as u,f as e}from"./app-2a9bb723.js";const d={},r=e('<div class="hint-container tip"><p class="hint-container-title">什么是模块化？</p><p>百度百科中的解释: 模块化是指解决一个复杂问题时自顶向下逐层把系统划分成若干模块的过程，有多种属性，分别反映其内部特性。</p><p>在编程中 模块化是将一个复杂的应用程序，按照一定的规则拆分成若干个文件(代码块)，并进行组合。文件内部的数据与实现都是私有的，只是对外暴露一些接口(方法、变量)与其他模块进行通信</p></div><p>模块化的好处</p><ul><li>避免命名空间的冲突</li><li>提高代码的复用性</li><li>提高维护性</li><li>更好的分离，实现按需加载</li></ul><p>目前前端主流的模块规范是</p><ul><li><code>CommonJS</code></li><li><code>ESModule</code></li><li><code>AMD</code></li><li><code>CMD</code></li><li><code>UMD</code></li></ul><h2 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJS</h2>',6),k={href:"https://www.commonjs.org/",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"CommonJS",-1),v=n("code",null,"Node",-1),h=e(`<ul><li><code>module.exports</code> 用于规定当前模块对外输出的接口</li><li><code>exports</code> 是 <code>module.exports</code> 属性的引用</li><li><code>require</code> 用于加载模块文件(读入并执行一个 <code>JavaScript</code> 文件并返回该模块的 <code>exports</code> 对象)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* util.js */</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;h7ml&#39;</span>
exports<span class="token punctuation">.</span>name <span class="token operator">=</span> name
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* index.js */</span>
<span class="token keyword">const</span> util <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>&#39;<span class="token punctuation">.</span><span class="token operator">/</span>util<span class="token punctuation">.</span>js<span class="token punctuation">)</span>
util<span class="token punctuation">.</span>name
util<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">exports 和 module.exports</p><ul><li><code>exports</code> 是 <code>module</code> 对象的一个属性</li><li><code>exports</code> 是 <code>module.exports</code> 的一个引用，在默认情况下 <code>module.exports</code> 和 <code>exports</code> 指向<strong>同一个空对象</strong></li><li>模块导出的是 <code>module.exports</code></li></ul></div><div class="hint-container tip"><p class="hint-container-title">CommonJS 模块的特点</p><ul><li>所有代码都运行在模块作用域，不会污染全局作用域</li><li>模块可以多次加载，但只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载时就直接读取缓存结果。要想让模块再次运行必须清除缓存</li><li>模块加载的顺序按其在代码中出现的顺序</li></ul></div><h2 id="esmodule" tabindex="-1"><a class="header-anchor" href="#esmodule" aria-hidden="true">#</a> ESModule</h2><p><code>ESModule</code> 是 <code>ES6</code> 在语言标准的层面上实现的模块功能，主要由 <code>export</code> 和 <code>import</code> 构成</p><ul><li><code>export</code> 命令用于规定模块的对外接口</li><li><code>import</code> 命令用于输入其他模块提供的功能</li></ul>`,7),b=e('<div class="hint-container tip"><p class="hint-container-title">ESModule 与 CommonJS 的差异</p><ul><li><code>CommonJS</code> 是动态语法可以写在判断里；<code>ESModule</code> 静态语法只能写在顶层</li><li><code>CommonJS</code> 模块输出的是一个值的拷贝；<code>ESModule</code> 输出的是值的引用 <ul><li><code>CommonJS</code> 模块一旦输出一个值模块内部的变化就影响不到这个值</li><li><code>ESModule</code> 模块在 <code>JavaScript</code> 引擎对脚本静态分析时，遇到模块加载命令 <code>import</code>，就会生成一个只读引用，等到脚本真正执行时再根据这个只读引用到被加载的那个模块里面去取值(<code>ESModule</code> 是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块)</li></ul></li><li><code>CommonJS</code> 模块是运行时加载；<code>ESModule</code> 是编译时输出接口。 <ul><li><code>CommonJS</code> 加载的是一个对象（即 <code>module.exports</code> 属性），该对象只有在脚本运行完才会生成</li><li><code>ESModule</code> 不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成</li></ul></li><li><code>CommonJS</code> 模块的 <code>require()</code> 是同步加载模块；<code>ESModule</code> 的 <code>import</code> 命令是异步加载，有一个独立的模块依赖的解析阶段。</li><li>顶层的 <code>this</code> 指向不同 <ul><li><code>CommonJS</code> 模块中的顶层 <code>this</code> 指向模块本身</li><li><code>ESModule</code> 模块中的顶层 <code>this</code> 指向 <code>undefined</code></li></ul></li><li>模块的循环加载 <ul><li><code>CommonJS</code> 模块在加载模块后就会执行整个脚本并在内存生成一个对象，当出现某个模块被&quot;循环加载&quot;，就只输出已经执行的部分，还未执行的部分不会输出</li><li><code>ESModule</code> 根本不会关心是否发生了&quot;循环加载&quot;，只是生成一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。</li></ul></li></ul></div><h2 id="amd" tabindex="-1"><a class="header-anchor" href="#amd" aria-hidden="true">#</a> AMD</h2>',2),f=n("code",null,"AMD",-1),g=n("br",null,null,-1),_=n("code",null,"AMD",-1),x={href:"https://requirejs.org/",target:"_blank",rel:"noopener noreferrer"},S=e(`<h3 id="相关-api-及使用" tabindex="-1"><a class="header-anchor" href="#相关-api-及使用" aria-hidden="true">#</a> 相关 api 及使用</h3><ul><li><code>define()</code>: 定义模块</li><li><code>require()</code>: 调用模块</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 先通过 script 加载 RequireJS */</span>

<span class="token comment">/* 定义模块 utils.js */</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;utils&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">log</span><span class="token operator">:</span> log<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 调用模块 */</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./utils&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">utils</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  utils<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> CMD</h2>`,4),y=n("code",null,"CMD",-1),M={href:"https://seajs.github.io/seajs/docs/",target:"_blank",rel:"noopener noreferrer"},j=e(`<blockquote><p><code>CMD</code> 规范是在 <code>AMD</code> 规范的基础上改进的一种规范，其解决了 <code>AMD</code> 规范对依赖模块的执行时机的问题</p></blockquote><h3 id="相关-api-及使用-1" tabindex="-1"><a class="header-anchor" href="#相关-api-及使用-1" aria-hidden="true">#</a> 相关 api 及使用</h3><ul><li><code>define()</code>: 定义模块</li><li><code>seajs.use()</code>: 调用模块</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 先通过 script 加载 SeaJS */</span>

<span class="token comment">/* 定义模块 utils.js */</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">log</span><span class="token operator">:</span> log<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 调用模块 */</span>
seajs<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./utils.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">utils</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  utils<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">AMD 和 CMD 的区别</p><ul><li><code>AMD</code><ul><li>依赖前置: 在定义模块的时需要声明其依赖的模块</li><li>在加载模块完成后就会执行该模块，当所有模块都加载执行完后会进入 require 的回调函数执行主逻辑</li></ul></li><li><code>CMD</code><ul><li>就近依赖: 只有当用到某个具体模块时再去加载</li><li>加载完某个依赖模块后并不执行，当所有依赖模块加载完成后进入主逻辑，遇到 require 语句的时候才执行对应的模块</li></ul></li></ul><p>两者最大的区别是对依赖模块的执行时机处理不同</p></div><h2 id="umd" tabindex="-1"><a class="header-anchor" href="#umd" aria-hidden="true">#</a> UMD</h2><p><code>UMD</code> 只是一种通用的写法，是为了解决当时存在多种流行而不统一的规范而产生的一种通用规范<br> <code>UMD</code> 实际是 <strong><code>AMD + CommonJS + 全局变量</code></strong> 这三种规范的结合</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> factory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// CommonJs 模块规范 Node 环境</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> module <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// AMD 模块规范</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 挂载全局变量(global 即全局对象)</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    root<span class="token punctuation">.</span>returnExports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>jQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">$</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义属性</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">;</span>

  <span class="token comment">// 定义方法</span>
  <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">//    暴露公共方法</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">,</span>
    log<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h2>`,9),w={href:"https://segmentfault.com/a/1190000017878394",target:"_blank",rel:"noopener noreferrer"};function C(D,J){const o=t("ExternalLinkIcon"),c=t("RouterLink");return i(),l("div",null,[r,n("p",null,[n("a",k,[m,a(o)]),s(" 规范是一种同步加载模块的方式，其主要用于服务端，即 "),v,s(" 中的")]),h,n("p",null,[a(c,{to:"/interview/es6/#esmodule"},{default:u(()=>[s("ES6 常用知识 —— ESModule")]),_:1})]),b,n("p",null,[f,s(" 规范全称是 Asynchronous Module Definition，即异步模块定义，主要用于浏览器。"),g,s(),_,s(" 规范完整描述了模块的定义、依赖关系、引用关系以及加载机制。其代表库是 "),n("a",x,[s("RequireJS"),a(o)])]),S,n("p",null,[y,s(" 规范全称是 Common Module Definition，即通用模块定义，其代表库是 "),n("a",M,[s("SeaJS"),a(o)])]),j,n("p",null,[n("a",w,[s("深入 CommonJs 与 ES6 Module"),a(o)])])])}const E=p(d,[["render",C],["__file","module.html.vue"]]);export{E as default};
