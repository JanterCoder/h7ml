import{_ as n,o as s,c as a,f as t}from"./app-2a9bb723.js";const e={},p=t(`<h2 id="setstate-是同步还是异步的" tabindex="-1"><a class="header-anchor" href="#setstate-是同步还是异步的" aria-hidden="true">#</a> setState 是同步还是异步的？</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token function-variable function">trigger</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">isBatchedUpdate</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">runSetState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isBatchedUpdate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">runSetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>runSetState<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">触发合成事件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">触发 setTimeout 事件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现两个执行的时机不一样，<code>console.log</code> 的结果也不一样。一个是同步，一个则是异步。</p><h3 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h3><p>我们来看看 react 部分源码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span><span class="token parameter">fiber<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lane <span class="token operator">===</span> SyncLane<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 同步操作</span>
    <span class="token function">ensureRootIsScheduled</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 判断当前是否还在 React 事件流中</span>
    <span class="token comment">// 如果不在，直接调用 flushSyncCallbackQueue 更新</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>executionContext <span class="token operator">===</span> NoContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">flushSyncCallbackQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 异步操作</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码可以简单描述这个过程，主要是判断了 <code>executionContext</code> 是否等于 <code>NoContext</code> 来确定当前更新流程是否在 React 事件流中。</p><p>所有的事件在触发的时候，都会先调用 <code>batchedEventUpdates$1</code> 这个方法，在这里就会修改 <code>executionContext</code> 的值，React 就知道此时的 <code>setState</code> 在自己的掌控中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// executionContext 的默认状态</span>
<span class="token keyword">var</span> executionContext <span class="token operator">=</span> NoContext<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">batchedEventUpdates$1</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> prevExecutionContext <span class="token operator">=</span> executionContext<span class="token punctuation">;</span>
  executionContext <span class="token operator">|=</span> EventContext<span class="token punctuation">;</span> <span class="token comment">// 修改状态</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    executionContext <span class="token operator">=</span> prevExecutionContext<span class="token punctuation">;</span>
    <span class="token comment">// 调用结束后，调用 flushSyncCallbackQueue</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>executionContext <span class="token operator">===</span> NoContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">flushSyncCallbackQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alvin-cdn.oss-cn-shenzhen.aliyuncs.com/images/setState.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>所以，不管是直接调用 flushSyncCallbackQueue ，还是推迟调用，这里本质上都是同步的，只是有个先后顺序的问题。</p><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h3><p><strong>同步情况</strong></p><ol><li>当前是 <code>Legacy 模式</code></li><li>在非合成事件中执行 <code>setState</code>，比如 <code>setTimeout</code>, <code>Promise</code>, <code>MessageChannel</code> 等</li></ol><p><strong>异步情况</strong></p><ol><li>如果是合成事件中的回调, <code>executionContext |= EventContext</code>, 所以不会进入, 最终表现出异步</li><li>concurrent 模式下都为异步</li></ol><h3 id="批处理" tabindex="-1"><a class="header-anchor" href="#批处理" aria-hidden="true">#</a> 批处理</h3><p>在<strong>React 合成事件</strong>中执行多次 setState 后，react 会合并进行一次更新，这样就可以提高性能，这就是<strong>批处理</strong>的概念。</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token function-variable function">trigger</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">isBatchedUpdate</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">runSetState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isBatchedUpdate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">runSetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// render 一次</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>runSetState<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// render 两次</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即使是 async 函数，isBatchedUpdate 为 false，那多次 setState 实际上也会 render 多次。～～</p><h3 id="给张图" tabindex="-1"><a class="header-anchor" href="#给张图" aria-hidden="true">#</a> 给张图</h3><figure><img src="https://alvin-cdn.oss-cn-shenzhen.aliyuncs.com/images/setState-async.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,22),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","setState.html.vue"]]);export{r as default};
