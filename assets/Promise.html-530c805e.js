import{_ as n,o as s,c as a,f as e}from"./app-2a9bb723.js";const t={},p=e(`<h1 id="javascript-es6-promise" tabindex="-1"><a class="header-anchor" href="#javascript-es6-promise" aria-hidden="true">#</a> JavaScript ES6 Promise</h1><h2 id="promise-状态" tabindex="-1"><a class="header-anchor" href="#promise-状态" aria-hidden="true">#</a> Promise 状态</h2><p>Promise 状态</p><ul><li>pending（进行中） ----&gt; fulfilled/resolved（成功）</li><li>pending（进行中） ----&gt; rejected（失败）</li></ul><p>只要处于 fulfilled/resolved [成功] 和 rejected [失败]，状态就不会再变。</p><ol><li>创建 Promise 参数内的函数会立即执行，并返回 Promise 对象</li><li>两个参数代表状态，resolve 成功调用，reject 失败调用</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>返回 Pormise 对象调用 then 方法，第一个参数对象 resolve 成功后的回调，第二个参数对应 reject 失败时回调。then 方法也会返回 Promise 对象</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>p1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>then 方法执行成功的回调时，如果发生错误，不会被第二个参数对应 reject 失败时回调捕捉到。</li><li>then 方法执行成功的回调发生错误是，链式调用 catch 方法可以捕捉前面 then 方法发生的错误</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>p1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  代码块有发生错误<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-all-与-promise-race" tabindex="-1"><a class="header-anchor" href="#promise-all-与-promise-race" aria-hidden="true">#</a> Promise.all()与 Promise.race()</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Promise 对象<span class="token punctuation">,</span>Promise 对象<span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 批量执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>传入数组中包含多个 Promise 实例，也可以是别的值，all 包装成一个新的 Promise</li><li>全部都成功后，返回每个 Promise 成功的值 [&quot;resolve 成功值 1&quot;, &quot;resolve 成功值 1&quot;]</li><li>任何一个失败，返回第一个失败的 Promise 结果</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Promise 对象<span class="token punctuation">,</span>Promise 对象<span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不管成功还是失败、哪个结果获得的快，就返回那个结果。</p>`,16),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","Promise.html.vue"]]);export{r as default};
