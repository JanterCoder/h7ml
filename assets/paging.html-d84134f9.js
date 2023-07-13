import{_ as a,r as p,o as t,c as e,a as n,b as o,d as c,f as l}from"./app-2a9bb723.js";const i={},u=l(`<h1 id="如果让你来设计一个分页功能-你会怎么设计-前后端如何交互" tabindex="-1"><a class="header-anchor" href="#如果让你来设计一个分页功能-你会怎么设计-前后端如何交互" aria-hidden="true">#</a> 如果让你来设计一个分页功能, 你会怎么设计? 前后端如何交互?</h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/54b0a390-cf14-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>在我们做数据查询的时候，如果数据量很大，比如几万条数据，放在一个页面显示的话显然不友好，这时候就需要采用分页显示的形式，如每次只显示 10 条数据</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/6070e8c0-cf14-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>要实现分页功能，实际上就是从结果集中显示第 1~10 条记录作为第 1 页，显示第 11~20 条记录作为第 2 页，以此类推</p><p>因此，分页实际上就是从结果集中截取出第 M~N 条记录</p><h2 id="二、如何实现" tabindex="-1"><a class="header-anchor" href="#二、如何实现" aria-hidden="true">#</a> 二、如何实现</h2><p>前端实现分页功能，需要后端返回必要的数据，如总的页数，总的数据量，当前页，当前的数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token string-property property">&quot;totalCount&quot;</span><span class="token operator">:</span> <span class="token number">1836</span><span class="token punctuation">,</span>   <span class="token comment">// 总的条数</span>
 <span class="token string-property property">&quot;totalPages&quot;</span><span class="token operator">:</span> <span class="token number">92</span><span class="token punctuation">,</span>  <span class="token comment">// 总页数</span>
 <span class="token string-property property">&quot;currentPage&quot;</span><span class="token operator">:</span> <span class="token number">1</span>   <span class="token comment">// 当前页数</span>
 <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>     <span class="token comment">// 当前页的数据</span>
   <span class="token punctuation">{</span>
 <span class="token operator">...</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端采用<code>mysql</code>作为数据的持久性存储</p><p>前端向后端发送目标的页码<code>page</code>以及每页显示数据的数量<code>pageSize</code>，默认情况每次取 10 条数据，则每一条数据的起始位置<code>start</code>为：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> pageSize<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当确定了<code>limit</code>和<code>start</code>的值后，就能够确定<code>SQL</code>语句：</p><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>const sql = \`SELECT * FROM record limit \${pageSize} OFFSET \${start};\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上诉<code>SQL</code>语句表达的意思为：截取从<code>start</code>到<code>start</code>+<code>pageSize</code>之间（左闭右开）的数据</p><p>关于查询数据总数的<code>SQL</code>语句为，<code>record</code>为表名：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT COUNT(*) FROM record
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因此后端的处理逻辑为：</p><ul><li>获取用户参数页码数 page 和每页显示的数目 pageSize ，其中 page 是必须传递的参数，pageSize 为可选参数，默认为 10</li><li>编写 SQL 语句，利用 limit 和 OFFSET 关键字进行分页查询</li><li>查询数据库，返回总数据量、总页数、当前页、当前页数据给前端</li></ul><p>代码如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> param <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// 获取参数</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    param <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    param <span class="token operator">=</span> req<span class="token punctuation">.</span>query <span class="token operator">||</span> req<span class="token punctuation">.</span>params<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>param<span class="token punctuation">.</span>page <span class="token operator">==</span> <span class="token string">&#39;&#39;</span> <span class="token operator">||</span> param<span class="token punctuation">.</span>page <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> param<span class="token punctuation">.</span>page <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;请传入参数page&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;102&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> pageSize <span class="token operator">=</span> param<span class="token punctuation">.</span>pageSize <span class="token operator">||</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token punctuation">(</span>param<span class="token punctuation">.</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> pageSize<span class="token punctuation">;</span>
  <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">SELECT * FROM record limit </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pageSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> OFFSET </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  pool<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> connection</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
    connection<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> results</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      connection<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 计算总页数</span>
        <span class="token keyword">var</span> allCount <span class="token operator">=</span> results<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;COUNT(*)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> allPage <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>allCount<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> pageStr <span class="token operator">=</span> allPage<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 不能被整除</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pageStr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          allPage <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>pageStr<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> list <span class="token operator">=</span> results<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>
          <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;操作成功&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">totalPages</span><span class="token operator">:</span> allPage<span class="token punctuation">,</span>
            <span class="token literal-property property">currentPage</span><span class="token operator">:</span> param<span class="token punctuation">.</span>page<span class="token punctuation">,</span>
            <span class="token literal-property property">totalCount</span><span class="token operator">:</span> allCount<span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> list<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><p>通过上面的分析，可以看到分页查询的关键在于，要首先确定每页显示的数量<code>pageSize</code>，然后根据当前页的索引<code>pageIndex</code>（从 1 开始），确定<code>LIMIT</code>和<code>OFFSET</code>应该设定的值：</p><ul><li>LIMIT 总是设定为 pageSize</li><li>OFFSET 计算公式为 pageSize * (pageIndex - 1)</li></ul><p>确定了这两个值，就能查询出第 <code>N</code>页的数据</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,27),r={href:"https://www.liaoxuefeng.com/wiki/1177760294764384/1217864791925600",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const s=p("ExternalLinkIcon");return t(),e("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[o("https://www.liaoxuefeng.com/wiki/1177760294764384/1217864791925600"),c(s)])])])])}const g=a(i,[["render",k],["__file","paging.html.vue"]]);export{g as default};
