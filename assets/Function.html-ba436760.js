const n=JSON.parse(`{"key":"v-da3cc978","path":"/posts/ecmascript/Function.html","title":"JavaScript ES6 Function 箭头函数","lang":"zh-CN","frontmatter":{"description":"JavaScript ES6 Function 箭头函数 传参 // 默认参数 // 使用默认参数时，不能有同名形参 function fn(name, age = 17) { console.log(name + ',' + age); } function f(...values) { // [1, 2] console.log(values.length); // 2 } f(1, 2); // 2","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/ecmascript/Function.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/ecmascript/Function.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript ES6 Function 箭头函数"}],["meta",{"property":"og:description","content":"JavaScript ES6 Function 箭头函数 传参 // 默认参数 // 使用默认参数时，不能有同名形参 function fn(name, age = 17) { console.log(name + ',' + age); } function f(...values) { // [1, 2] console.log(values.length); // 2 } f(1, 2); // 2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript ES6 Function 箭头函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[{"level":2,"title":"传参","slug":"传参","link":"#传参","children":[]},{"level":2,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[]},{"level":2,"title":"箭头函数不适用的场景","slug":"箭头函数不适用的场景","link":"#箭头函数不适用的场景","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.04,"words":312},"filePathRelative":"posts/ecmascript/Function.md","localizedDate":"2023年5月3日","excerpt":"<h1> JavaScript ES6 Function 箭头函数</h1>\\n<h2> 传参</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 默认参数</span>\\n<span class=\\"token comment\\">// 使用默认参数时，不能有同名形参</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">name<span class=\\"token punctuation\\">,</span> age <span class=\\"token operator\\">=</span> <span class=\\"token number\\">17</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>name <span class=\\"token operator\\">+</span> <span class=\\"token string\\">','</span> <span class=\\"token operator\\">+</span> age<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">f</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token operator\\">...</span>values</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// [1, 2]</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>values<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 2</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">f</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 2</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
