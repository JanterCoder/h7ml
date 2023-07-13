const n=JSON.parse(`{"key":"v-2e04d6bc","path":"/posts/javascript/animation/%E6%8B%96%E6%8B%BD%E6%95%88%E6%9E%9C.html","title":"JavaScript 拖拽效果-动画","lang":"zh-CN","frontmatter":{"description":"JavaScript 拖拽效果-动画 鼠标按下 onmousedown，onmousedown 里边鼠标移动 onmousemove，鼠标释放 onmouseup var oDiv = document.getElementById('box'); var disX = (disY = 0); oDiv.onmousedown = function (ev) { var ev = ev || event; disX = ev.offsetX; disY = ev.offsetY; document.onmousemove = function (ev) { var ev = ev || event; var l = ev.clientX - disX; var t = ev.clientY - disY; // 边界限定 if (l &lt;= 0) { l = 0; } else if (l &gt;= document.documentElement.clientWidth - oDiv.offsetWidth) { l = document.documentElement.clientWidth - oDiv.offsetWidth; } if (t &lt;= 0) { t = 0; } else if (t &gt;= document.documentElement.clientHeight - oDiv.offsetHeight) { t = document.documentElement.clientHeight - oDiv.offsetHeight; } // 吸附效果 /* if(l &lt;= 100){ l = 0; }else if(l &gt;= document.documentElement.clientWidth - oDiv.offsetWidth - 100){ l = document.documentElement.clientWidth - oDiv.offsetWidth; } if(t &lt;= 0){ t = 0; }else if(t &gt;= document.documentElement.clientHeight - oDiv.offsetHeight){ t = document.documentElement.clientHeight - oDiv.offsetHeight; } */ oDiv.style.left = l + 'px'; oDiv.style.top = t + 'px'; }; document.onmouseup = function () { this.onmousemove = null; this.onmouseup = null; }; };","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/javascript/animation/%E6%8B%96%E6%8B%BD%E6%95%88%E6%9E%9C.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/javascript/animation/%E6%8B%96%E6%8B%BD%E6%95%88%E6%9E%9C.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript 拖拽效果-动画"}],["meta",{"property":"og:description","content":"JavaScript 拖拽效果-动画 鼠标按下 onmousedown，onmousedown 里边鼠标移动 onmousemove，鼠标释放 onmouseup var oDiv = document.getElementById('box'); var disX = (disY = 0); oDiv.onmousedown = function (ev) { var ev = ev || event; disX = ev.offsetX; disY = ev.offsetY; document.onmousemove = function (ev) { var ev = ev || event; var l = ev.clientX - disX; var t = ev.clientY - disY; // 边界限定 if (l &lt;= 0) { l = 0; } else if (l &gt;= document.documentElement.clientWidth - oDiv.offsetWidth) { l = document.documentElement.clientWidth - oDiv.offsetWidth; } if (t &lt;= 0) { t = 0; } else if (t &gt;= document.documentElement.clientHeight - oDiv.offsetHeight) { t = document.documentElement.clientHeight - oDiv.offsetHeight; } // 吸附效果 /* if(l &lt;= 100){ l = 0; }else if(l &gt;= document.documentElement.clientWidth - oDiv.offsetWidth - 100){ l = document.documentElement.clientWidth - oDiv.offsetWidth; } if(t &lt;= 0){ t = 0; }else if(t &gt;= document.documentElement.clientHeight - oDiv.offsetHeight){ t = document.documentElement.clientHeight - oDiv.offsetHeight; } */ oDiv.style.left = l + 'px'; oDiv.style.top = t + 'px'; }; document.onmouseup = function () { this.onmousemove = null; this.onmouseup = null; }; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 拖拽效果-动画\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"posts/javascript/animation/拖拽效果.md","localizedDate":"2023年5月3日","excerpt":"<h1> JavaScript 拖拽效果-动画</h1>\\n<p>鼠标按下 onmousedown，onmousedown 里边鼠标移动 onmousemove，鼠标释放 onmouseup</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> oDiv <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'box'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">var</span> disX <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>disY <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\noDiv<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">onmousedown</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">ev</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">var</span> ev <span class=\\"token operator\\">=</span> ev <span class=\\"token operator\\">||</span> event<span class=\\"token punctuation\\">;</span>\\n  disX <span class=\\"token operator\\">=</span> ev<span class=\\"token punctuation\\">.</span>offsetX<span class=\\"token punctuation\\">;</span>\\n  disY <span class=\\"token operator\\">=</span> ev<span class=\\"token punctuation\\">.</span>offsetY<span class=\\"token punctuation\\">;</span>\\n\\n  document<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">onmousemove</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">ev</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">var</span> ev <span class=\\"token operator\\">=</span> ev <span class=\\"token operator\\">||</span> event<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">var</span> l <span class=\\"token operator\\">=</span> ev<span class=\\"token punctuation\\">.</span>clientX <span class=\\"token operator\\">-</span> disX<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">var</span> t <span class=\\"token operator\\">=</span> ev<span class=\\"token punctuation\\">.</span>clientY <span class=\\"token operator\\">-</span> disY<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">// 边界限定</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>l <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      l <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>l <span class=\\"token operator\\">&gt;=</span> document<span class=\\"token punctuation\\">.</span>documentElement<span class=\\"token punctuation\\">.</span>clientWidth <span class=\\"token operator\\">-</span> oDiv<span class=\\"token punctuation\\">.</span>offsetWidth<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      l <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span>documentElement<span class=\\"token punctuation\\">.</span>clientWidth <span class=\\"token operator\\">-</span> oDiv<span class=\\"token punctuation\\">.</span>offsetWidth<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>t <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      t <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>t <span class=\\"token operator\\">&gt;=</span> document<span class=\\"token punctuation\\">.</span>documentElement<span class=\\"token punctuation\\">.</span>clientHeight <span class=\\"token operator\\">-</span> oDiv<span class=\\"token punctuation\\">.</span>offsetHeight<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      t <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span>documentElement<span class=\\"token punctuation\\">.</span>clientHeight <span class=\\"token operator\\">-</span> oDiv<span class=\\"token punctuation\\">.</span>offsetHeight<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token comment\\">// 吸附效果</span>\\n    <span class=\\"token comment\\">/* if(l &lt;= 100){\\n    l = 0;\\n    }else if(l &gt;= document.documentElement.clientWidth - oDiv.offsetWidth - 100){\\n    l = document.documentElement.clientWidth - oDiv.offsetWidth;\\n    }\\n\\n    if(t &lt;= 0){\\n    t = 0;\\n    }else if(t &gt;= document.documentElement.clientHeight - oDiv.offsetHeight){\\n    t = document.documentElement.clientHeight - oDiv.offsetHeight;\\n    } */</span>\\n\\n    oDiv<span class=\\"token punctuation\\">.</span>style<span class=\\"token punctuation\\">.</span>left <span class=\\"token operator\\">=</span> l <span class=\\"token operator\\">+</span> <span class=\\"token string\\">'px'</span><span class=\\"token punctuation\\">;</span>\\n    oDiv<span class=\\"token punctuation\\">.</span>style<span class=\\"token punctuation\\">.</span>top <span class=\\"token operator\\">=</span> t <span class=\\"token operator\\">+</span> <span class=\\"token string\\">'px'</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  document<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">onmouseup</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>onmousemove <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>onmouseup <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
