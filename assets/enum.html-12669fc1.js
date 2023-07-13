import{_ as p,r as e,o as i,c as o,a as n,b as a,d as t,f as c}from"./app-2a9bb723.js";const l={},u=c(`<h1 id="说说你对-typescript-中枚举类型的理解-应用场景" tabindex="-1"><a class="header-anchor" href="#说说你对-typescript-中枚举类型的理解-应用场景" aria-hidden="true">#</a> 说说你对 TypeScript 中枚举类型的理解？应用场景？</h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/76173bf0-0b0c-11ec-a752-75723a64e8f5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>枚举是一个被命名的整型常数的集合，用于声明一组命名的常数,当一个变量有几种可能的取值时,可以将它定义为枚举类型</p><p>通俗来说，枚举就是一个对象的所有可能取值的集合</p><p>在日常生活中也很常见，例如表示星期的 SUNDAY、MONDAY、TUESDAY、WEDNESDAY、THURSDAY、FRIDAY、SATURDAY 就可以看成是一个枚举</p><p>枚举的说明与结构和联合相似，其形式为：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>enum 枚举名{
    标识符①[=整型常数],
    标识符②[=整型常数],
    ...
    标识符N[=整型常数],
}枚举变量;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、使用" tabindex="-1"><a class="header-anchor" href="#二、使用" aria-hidden="true">#</a> 二、使用</h2><p>枚举的使用是通过<code>enum</code>关键字进行定义，形式如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> xxx <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>声明关键字为枚举类型的方式如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 声明d为枚举类型Direction</span>
<span class="token keyword">let</span> d<span class="token operator">:</span> Direction<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>类型可以分成：</p><ul><li><p>数字枚举</p></li><li><p>字符串枚举</p></li><li><p>异构枚举</p></li></ul><h3 id="数字枚举" tabindex="-1"><a class="header-anchor" href="#数字枚举" aria-hidden="true">#</a> 数字枚举</h3><p>当我们声明一个枚举类型是,虽然没有给它们赋值,但是它们的值其实是默认的数字类型,而且默认从 0 开始依次累加:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Up<span class="token punctuation">,</span> <span class="token comment">// 值默认为 0</span>
  Down<span class="token punctuation">,</span> <span class="token comment">// 值默认为 1</span>
  Left<span class="token punctuation">,</span> <span class="token comment">// 值默认为 2</span>
  Right<span class="token punctuation">,</span> <span class="token comment">// 值默认为 3</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Down <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Left <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Right <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们将第一个值进行赋值后，后面的值也会根据前一个值进行累加 1：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Up <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
  Down<span class="token punctuation">,</span>
  Left<span class="token punctuation">,</span>
  Right<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">,</span> Direction<span class="token punctuation">.</span>Down<span class="token punctuation">,</span> Direction<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> Direction<span class="token punctuation">.</span>Right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10 11 12 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串枚举" tabindex="-1"><a class="header-anchor" href="#字符串枚举" aria-hidden="true">#</a> 字符串枚举</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>枚举类型的值其实也可以是字符串类型：

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up <span class="token operator">=</span> <span class="token string">&#39;Up&#39;</span><span class="token punctuation">,</span>
    Down <span class="token operator">=</span> <span class="token string">&#39;Down&#39;</span><span class="token punctuation">,</span>
    Left <span class="token operator">=</span> <span class="token string">&#39;Left&#39;</span><span class="token punctuation">,</span>
    Right <span class="token operator">=</span> <span class="token string">&#39;Right&#39;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token string">&#39;Right&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Right Up</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果设定了一个变量为字符串之后，后续的字段也需要赋值字符串，否则报错：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Up <span class="token operator">=</span> <span class="token string">&#39;UP&#39;</span><span class="token punctuation">,</span>
  Down<span class="token punctuation">,</span> <span class="token comment">// error TS1061: Enum member must have initializer</span>
  Left<span class="token punctuation">,</span> <span class="token comment">// error TS1061: Enum member must have initializer</span>
  Right<span class="token punctuation">,</span> <span class="token comment">// error TS1061: Enum member must have initializer</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异构枚举" tabindex="-1"><a class="header-anchor" href="#异构枚举" aria-hidden="true">#</a> 异构枚举</h3><p>即将数字枚举和字符串枚举结合起来混合起来使用，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> BooleanLikeHeterogeneousEnum <span class="token punctuation">{</span>
  No <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  Yes <span class="token operator">=</span> <span class="token string">&#39;YES&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常情况下我们很少会使用异构枚举</p><h3 id="本质" tabindex="-1"><a class="header-anchor" href="#本质" aria-hidden="true">#</a> 本质</h3><p>现在一个枚举的案例如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Up<span class="token punctuation">,</span>
  Down<span class="token punctuation">,</span>
  Left<span class="token punctuation">,</span>
  Right<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过编译后，<code>javascript</code>如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">var</span> Direction<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>Direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Direction<span class="token punctuation">[</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token string">&#39;Up&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Up&#39;</span><span class="token punctuation">;</span>
  Direction<span class="token punctuation">[</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token string">&#39;Down&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Down&#39;</span><span class="token punctuation">;</span>
  Direction<span class="token punctuation">[</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token string">&#39;Left&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Left&#39;</span><span class="token punctuation">;</span>
  Direction<span class="token punctuation">[</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token string">&#39;Right&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Right&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Direction <span class="token operator">||</span> <span class="token punctuation">(</span>Direction <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码可以看到， <code>Direction[Direction[&quot;Up&quot;] = 0] = &quot;Up&quot;</code>可以分成</p><ul><li>Direction[&quot;Up&quot;] = 0</li><li>Direction[0] = &quot;Up&quot;</li></ul><p>所以定义枚举类型后，可以通过正反映射拿到对应的值，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Up<span class="token punctuation">,</span>
  Down<span class="token punctuation">,</span>
  Left<span class="token punctuation">,</span>
  Right<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Up</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且多处定义的枚举是可以进行合并操作，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Up <span class="token operator">=</span> <span class="token string">&#39;Up&#39;</span><span class="token punctuation">,</span>
  Down <span class="token operator">=</span> <span class="token string">&#39;Down&#39;</span><span class="token punctuation">,</span>
  Left <span class="token operator">=</span> <span class="token string">&#39;Left&#39;</span><span class="token punctuation">,</span>
  Right <span class="token operator">=</span> <span class="token string">&#39;Right&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Center <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后，<code>js</code>代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> Direction<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Direction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Direction<span class="token punctuation">[</span><span class="token string">&#39;Up&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Up&#39;</span><span class="token punctuation">;</span>
  Direction<span class="token punctuation">[</span><span class="token string">&#39;Down&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Down&#39;</span><span class="token punctuation">;</span>
  Direction<span class="token punctuation">[</span><span class="token string">&#39;Left&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Left&#39;</span><span class="token punctuation">;</span>
  Direction<span class="token punctuation">[</span><span class="token string">&#39;Right&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Right&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Direction <span class="token operator">||</span> <span class="token punctuation">(</span>Direction <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Direction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Direction<span class="token punctuation">[</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token string">&#39;Center&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Center&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Direction <span class="token operator">||</span> <span class="token punctuation">(</span>Direction <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code>Direction</code>对象属性回叠加</p><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景" aria-hidden="true">#</a> 三、应用场景</h2><p>就拿回生活的例子，后端返回的字段使用 0 - 6 标记对应的日期，这时候就可以使用枚举可提高代码可读性，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Days <span class="token punctuation">{</span>
  Sun<span class="token punctuation">,</span>
  Mon<span class="token punctuation">,</span>
  Tue<span class="token punctuation">,</span>
  Wed<span class="token punctuation">,</span>
  Thu<span class="token punctuation">,</span>
  Fri<span class="token punctuation">,</span>
  Sat<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token string">&#39;Tue&#39;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token string">&#39;Sat&#39;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>包括后端日常返回 0、1 等等状态的时候，我们都可以通过枚举去定义，这样可以提高代码的可读性，便于后续的维护</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,47),r={href:"https://zh.wikipedia.org/wiki/%E6%9E%9A%E4%B8%BE",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.jianshu.com/p/b9e1caa4dd98",target:"_blank",rel:"noopener noreferrer"},k={href:"https://juejin.cn/post/6844904112669065224#heading-30",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=e("ExternalLinkIcon");return i(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("https://zh.wikipedia.org/wiki/枚举"),t(s)])]),n("li",null,[n("a",d,[a("https://www.jianshu.com/p/b9e1caa4dd98"),t(s)])]),n("li",null,[n("a",k,[a("https://juejin.cn/post/6844904112669065224#heading-30"),t(s)])])])])}const h=p(l,[["render",v],["__file","enum.html.vue"]]);export{h as default};
