const t=JSON.parse(`{"key":"v-705c0a16","path":"/posts/javascript/form/%E6%96%87%E6%9C%AC%E9%80%89%E4%B8%AD%E6%A3%80%E6%B5%8B.html","title":"JavaScript 文本选中检测","lang":"zh-CN","frontmatter":{"description":"JavaScript 文本选中检测 选中文本 inp.select(); // 选中文本框中的所有文字 function getSelectedText(text){ if(typeof text.selectionStart == 'number'){ ​ // 选择文字的起始，结束下标 return text.value.substring(text.selectionStart,text.selectionEnd); }else if(document.selecttion){// IE 取得 IE 中的选择文本代码 调用 document.selecttion 不需要考虑 text 参数 return document.selecttion.createRang().text; ​ } }","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/javascript/form/%E6%96%87%E6%9C%AC%E9%80%89%E4%B8%AD%E6%A3%80%E6%B5%8B.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/javascript/form/%E6%96%87%E6%9C%AC%E9%80%89%E4%B8%AD%E6%A3%80%E6%B5%8B.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript 文本选中检测"}],["meta",{"property":"og:description","content":"JavaScript 文本选中检测 选中文本 inp.select(); // 选中文本框中的所有文字 function getSelectedText(text){ if(typeof text.selectionStart == 'number'){ ​ // 选择文字的起始，结束下标 return text.value.substring(text.selectionStart,text.selectionEnd); }else if(document.selecttion){// IE 取得 IE 中的选择文本代码 调用 document.selecttion 不需要考虑 text 参数 return document.selecttion.createRang().text; ​ } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 文本选中检测\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[{"level":2,"title":"选中文本","slug":"选中文本","link":"#选中文本","children":[]},{"level":2,"title":"输入检测","slug":"输入检测","link":"#输入检测","children":[]},{"level":2,"title":"选择框脚本","slug":"选择框脚本","link":"#选择框脚本","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.56,"words":468},"filePathRelative":"posts/javascript/form/文本选中检测.md","localizedDate":"2023年5月3日","excerpt":"<h1> JavaScript 文本选中检测</h1>\\n<h2> 选中文本</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>inp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">select</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 选中文本框中的所有文字</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">getSelectedText</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">text</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> text<span class=\\"token punctuation\\">.</span>selectionStart <span class=\\"token operator\\">==</span> <span class=\\"token string\\">'number'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n​  <span class=\\"token comment\\">// 选择文字的起始，结束下标</span>\\n  <span class=\\"token keyword\\">return</span> text<span class=\\"token punctuation\\">.</span>value<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">substring</span><span class=\\"token punctuation\\">(</span>text<span class=\\"token punctuation\\">.</span>selectionStart<span class=\\"token punctuation\\">,</span>text<span class=\\"token punctuation\\">.</span>selectionEnd<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>document<span class=\\"token punctuation\\">.</span>selecttion<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span><span class=\\"token comment\\">// IE 取得 IE 中的选择文本代码 调用 document.selecttion 不需要考虑 text 参数</span>\\n  <span class=\\"token keyword\\">return</span> document<span class=\\"token punctuation\\">.</span>selecttion<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createRang</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>text<span class=\\"token punctuation\\">;</span>\\n​  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
