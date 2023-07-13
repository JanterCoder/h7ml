import{_ as n,o as a,c as s,f as e}from"./app-2a9bb723.js";const t={},l=e(`<h1 id="javascript-localstorage" tabindex="-1"><a class="header-anchor" href="#javascript-localstorage" aria-hidden="true">#</a> JavaScript localStorage</h1><h2 id="存储时间" tabindex="-1"><a class="header-anchor" href="#存储时间" aria-hidden="true">#</a> 存储时间</h2><ul><li><p>localStorage（IE8 以下不兼容）</p><ul><li>永久存储</li><li>最大存储 5M 客户端的微型数据库</li><li>只能存储 string</li></ul></li><li><p>cookie</p><ul><li>可以设置过期时间</li><li>最大存 4KB</li><li>每一个域名下面最多可以存储 50 条数据</li></ul></li><li><p>sessionStorage（结合后台使用、关闭窗口存储的数据清空）</p></li></ul><h2 id="localstorage-对象" tabindex="-1"><a class="header-anchor" href="#localstorage-对象" aria-hidden="true">#</a> localStorage 对象</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 设置键 值</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置键，值（必须 json 字符串）</span>
localStorage<span class="token punctuation">.</span>key <span class="token operator">=</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 获取对应键值</span>
localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
localStorage<span class="token punctuation">.</span>key<span class="token punctuation">;</span>

<span class="token comment">// 删除键值</span>
localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 删除对应键</span>
localstorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 清除所有</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[l];function o(i,p){return a(),s("div",null,c)}const r=n(t,[["render",o],["__file","localStorage.html.vue"]]);export{r as default};
