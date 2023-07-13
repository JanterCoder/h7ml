import{_ as t,r as i,o,c as p,a as n,b as s,d as e,f as c}from"./app-2a9bb723.js";const r={},l=c(`<h1 id="说说你对-typescript-的理解-与-javascript-的区别" tabindex="-1"><a class="header-anchor" href="#说说你对-typescript-的理解-与-javascript-的区别" aria-hidden="true">#</a> 说说你对 TypeScript 的理解？与 JavaScript 的区别？</h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/58cd3580-0950-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p><code>TypeScript</code> 是 <code>JavaScript</code> 的类型的超集，支持<code>ES6</code>语法，支持面向对象编程的概念，如类、接口、继承、泛型等</p><blockquote><p>超集，不得不说另外一个概念，子集，怎么理解这两个呢，举个例子，如果一个集合 A 里面的的所有元素集合 B 里面都存在，那么我们可以理解集合 B 是集合 A 的超集，集合 A 为集合 B 的子集</p></blockquote><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/61c2c1f0-0950-11ec-a752-75723a64e8f5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其是一种静态类型检查的语言，提供了类型注解，在代码编译阶段就可以检查出数据类型的错误</p><p>同时扩展了<code>JavaScript</code> 的语法，所以任何现有的<code>JavaScript</code> 程序可以不加改变的在 <code>TypeScript</code> 下工作</p><p>为了保证兼容性，<code>TypeScript</code> 在编译阶段需要编译器编译成纯 <code>JavaScript</code> 来运行，是为大型应用之开发而设计的语言，如下：</p><p><code>ts</code> 文件如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> hello<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编译文件后：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> hello <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、特性" tabindex="-1"><a class="header-anchor" href="#二、特性" aria-hidden="true">#</a> 二、特性</h2><p><code>TypeScript</code> 的特性主要有如下：</p><ul><li><strong>类型批注和编译时类型检查</strong> ：在编译时批注变量类型</li><li><strong>类型推断</strong>：ts 中没有批注变量类型会自动推断变量的类型</li><li><strong>类型擦除</strong>：在编译过程中批注的内容和接口会在运行时利用工具擦除</li><li><strong>接口</strong>：ts 中用接口来定义对象类型</li><li><strong>枚举</strong>：用于取值被限定在一定范围内的场景</li><li><strong>Mixin</strong>：可以接受任意类型的值</li><li><strong>泛型编程</strong>：写代码时使用一些以后才指定的类型</li><li><strong>名字空间</strong>：名字只在该区域内有效，其他区域可重复使用该名字而不冲突</li><li><strong>元组</strong>：元组合并了不同类型的对象，相当于一个可以装不同类型数据的数组</li><li>...</li></ul><h3 id="类型批注" tabindex="-1"><a class="header-anchor" href="#类型批注" aria-hidden="true">#</a> 类型批注</h3><p>通过类型批注提供在编译时启动类型检查的静态类型，这是可选的，而且可以忽略而使用 <code>JavaScript</code> 常规的动态类型</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">Add</span><span class="token punctuation">(</span>left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> left <span class="token operator">+</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于基本类型的批注是 <code>number</code>、<code>bool</code> 和 <code>string</code>，而弱或动态类型的结构则是 <code>any</code> 类型</p><h3 id="类型推断" tabindex="-1"><a class="header-anchor" href="#类型推断" aria-hidden="true">#</a> 类型推断</h3><p>当类型没有给出时，TypeScript 编译器利用类型推断来推断类型，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>变量 <code>str</code> 被推断为字符串类型，这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时</p><p>如果缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 <code>any</code> 类型</p><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><p>接口简单来说就是用来描述对象的类型 数据的类型有 <code>number</code>、<code>null</code>、<code>string</code> 等数据格式，对象的类型就是用接口来描述的</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别" aria-hidden="true">#</a> 三、区别</h2><ul><li>TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法</li><li>TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译</li><li>TypeScript 文件的后缀名 .ts （.ts，.tsx，.dts），JavaScript 文件是 .js</li><li>在编写 TypeScript 的文件的时候就会自动编译成 js 文件</li></ul><p>更多的区别如下图所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/6b544040-0950-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,33),d={href:"https://zhuanlan.zhihu.com/p/140012915",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.jianshu.com/p/c8aaba6e8ce0",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/powertoolsteam/p/13500668.html",target:"_blank",rel:"noopener noreferrer"};function g(k,v){const a=i("ExternalLinkIcon");return o(),p("div",null,[l,n("ul",null,[n("li",null,[n("a",d,[s("https://zhuanlan.zhihu.com/p/140012915"),e(a)])]),n("li",null,[n("a",u,[s("https://www.jianshu.com/p/c8aaba6e8ce0"),e(a)])]),n("li",null,[n("a",h,[s("https://www.cnblogs.com/powertoolsteam/p/13500668.html"),e(a)])])])])}const b=t(r,[["render",g],["__file","typescript_javascript.html.vue"]]);export{b as default};
