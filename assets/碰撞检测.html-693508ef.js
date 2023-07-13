const n=JSON.parse('{"key":"v-3516b59b","path":"/posts/javascript/animation/%E7%A2%B0%E6%92%9E%E6%A3%80%E6%B5%8B.html","title":"JavaScript 碰撞检测-动画","lang":"zh-CN","frontmatter":{"description":"JavaScript 碰撞检测-动画 function konck(node1, node2) { var l1 = node1.offsetLeft; var r1 = node1.offsetLeft + node1.offsetWidth; var t1 = node1.offsetTop; var b1 = node1.offsetTop + node1.offsetHeight; var l2 = node2.offsetLeft; var r2 = node2.offsetLeft + node2.offsetWidth; var t2 = node2.offsetTop; var b2 = node2.offsetTop + node2.offsetHeight; if (l2 &gt; r1 || r2 &lt; l1 || t1 &gt; b2 || t2 &gt; b1) { return false; } else { return true; } }","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/javascript/animation/%E7%A2%B0%E6%92%9E%E6%A3%80%E6%B5%8B.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/javascript/animation/%E7%A2%B0%E6%92%9E%E6%A3%80%E6%B5%8B.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript 碰撞检测-动画"}],["meta",{"property":"og:description","content":"JavaScript 碰撞检测-动画 function konck(node1, node2) { var l1 = node1.offsetLeft; var r1 = node1.offsetLeft + node1.offsetWidth; var t1 = node1.offsetTop; var b1 = node1.offsetTop + node1.offsetHeight; var l2 = node2.offsetLeft; var r2 = node2.offsetLeft + node2.offsetWidth; var t2 = node2.offsetTop; var b2 = node2.offsetTop + node2.offsetHeight; if (l2 &gt; r1 || r2 &lt; l1 || t1 &gt; b2 || t2 &gt; b1) { return false; } else { return true; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 碰撞检测-动画\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":0.18,"words":54},"filePathRelative":"posts/javascript/animation/碰撞检测.md","localizedDate":"2023年5月3日","excerpt":"<h1> JavaScript 碰撞检测-动画</h1>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">konck</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">node1<span class=\\"token punctuation\\">,</span> node2</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">var</span> l1 <span class=\\"token operator\\">=</span> node1<span class=\\"token punctuation\\">.</span>offsetLeft<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">var</span> r1 <span class=\\"token operator\\">=</span> node1<span class=\\"token punctuation\\">.</span>offsetLeft <span class=\\"token operator\\">+</span> node1<span class=\\"token punctuation\\">.</span>offsetWidth<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">var</span> t1 <span class=\\"token operator\\">=</span> node1<span class=\\"token punctuation\\">.</span>offsetTop<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">var</span> b1 <span class=\\"token operator\\">=</span> node1<span class=\\"token punctuation\\">.</span>offsetTop <span class=\\"token operator\\">+</span> node1<span class=\\"token punctuation\\">.</span>offsetHeight<span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">var</span> l2 <span class=\\"token operator\\">=</span> node2<span class=\\"token punctuation\\">.</span>offsetLeft<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">var</span> r2 <span class=\\"token operator\\">=</span> node2<span class=\\"token punctuation\\">.</span>offsetLeft <span class=\\"token operator\\">+</span> node2<span class=\\"token punctuation\\">.</span>offsetWidth<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">var</span> t2 <span class=\\"token operator\\">=</span> node2<span class=\\"token punctuation\\">.</span>offsetTop<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">var</span> b2 <span class=\\"token operator\\">=</span> node2<span class=\\"token punctuation\\">.</span>offsetTop <span class=\\"token operator\\">+</span> node2<span class=\\"token punctuation\\">.</span>offsetHeight<span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>l2 <span class=\\"token operator\\">&gt;</span> r1 <span class=\\"token operator\\">||</span> r2 <span class=\\"token operator\\">&lt;</span> l1 <span class=\\"token operator\\">||</span> t1 <span class=\\"token operator\\">&gt;</span> b2 <span class=\\"token operator\\">||</span> t2 <span class=\\"token operator\\">&gt;</span> b1<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
